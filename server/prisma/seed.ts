import fs from "fs"
import path from "path"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

async function deleteAll (orderedFileNames: string[]) {
  const allModel = orderedFileNames.map((filename) => {
      const extName = path.extname(filename);
      const modelName = path.basename(filename, extName);
      return modelName.charAt(0).toUpperCase() + modelName.slice(1);
  })


  for (const models of allModel) {
    const model: any = prisma[models as keyof typeof prisma];
    try {
      await model.deleteMany({});
      console.log(`Successfully deleted data from ${models}`);
    } catch (error) {
      console.error(`Error deleting data from ${models}: `, error);
    }
  }
}

async function insertAll (dataPathName: string, orderedFileNames: string[]) {
  for (const fileName of orderedFileNames) {
    const filePathOfData = path.join(dataPathName, fileName);
    const jsonData = JSON.parse(fs.readFileSync(filePathOfData, "utf-8"));
    const modelName = path.basename(fileName, path.extname(fileName));
    const model: any = prisma[modelName as keyof typeof prisma];

    try {
      for (const data of jsonData) {
        await model.create({ data });
      }
      console.log(`Successfully seeded ${modelName} from ${fileName}`);
    } catch (error) {
      console.error(`Error seeding data for ${modelName}:`, error);
    }
  }
}

async function main() {
  const dataPathName = path.join(__dirname, "data");

  const orderedFileNames = [
    "team.json",
    "project.json",
    "projectTeam.json",
    "user.json",
    "task.json",
    "attachment.json",
    "comment.json",
    "taskAssignment.json",
  ];

  await deleteAll(orderedFileNames);
  await insertAll(dataPathName, orderedFileNames);
}

main()
  .catch((error) => console.error(error))
  .finally(async() => await prisma.$disconnect());
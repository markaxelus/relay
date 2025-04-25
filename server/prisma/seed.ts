import fs from "fs"
import path from "path"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

async function deleteAll (orderedFileNames: string[]) {
  const allModel = orderedFileNames.map((filename) => {
      const extName = path.extname(filename);
      const modelName = path.basename(filename, extName);
      return modelName.charAt(0).toUpperCase + modelName.slice(1);
  })


  for (const models of allModel) {
    const model: any = prisma[models as keyof typeof prisma];
    try {
      await model.deleteMany({});
      console.log(`Successfully deleted data from ${model}`);
    } catch (error) {
      console.error(`Error deleting data from ${model}: `, error);
    }
  }

}

async function insertAll (orderedFileNames: string[]) {

}

async function main() {
  const pathName = path.join(__dirname, "data");

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


}
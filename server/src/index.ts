import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import projectRoutes from "./routes/projectRoutes"
import taskRoutes from "./routes/taskRoutes"

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("common"));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());



/* Routes */
app.get('/', (req, res) => {
  res.send("Home Route");
})

app.use('/projects', projectRoutes);
app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`)
})
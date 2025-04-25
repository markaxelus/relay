import { Router } from "express"
import { getProjects, createProjects } from "../controllers/projectController"

const router = Router();

router.get('/', getProjects);
router.post('/', createProjects);

export default router;
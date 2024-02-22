import express, { Request, Response } from "express";
import { TaskController } from "../controllers/task.controller";
import { CreateTaskUseCase } from "@src/task/aplication/uses-cases/create-task.use-case";
import { GetTaskUseCase } from "@src/task/aplication/uses-cases/get-task.use-case";
import { UpdateTaskUseCase } from "@src/task/aplication/uses-cases/update-tast.use-case";
import { DeleteTaskUseCase } from "@src/task/aplication/uses-cases/delete-task.use-case";
import { TaskRepository } from "../repositories/task-task.repositories";

const taskRepository = new TaskRepository();
const createTaskUseCase = new CreateTaskUseCase(taskRepository);
const getTaskUseCase = new GetTaskUseCase(taskRepository);
const updateTaskUseCase = new UpdateTaskUseCase(taskRepository);
const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);
const taskController = new TaskController(createTaskUseCase, getTaskUseCase, updateTaskUseCase, deleteTaskUseCase);

const router = express.Router();

router.post("/tasks", (req: Request, res: Response) => {
    taskController.createTask(req, res);
});

router.get("/tasks/:taskId", (req: Request, res: Response) => {
    taskController.getTask(req, res);
});

router.put("/tasks/:taskId", (req: Request, res: Response) => {
    taskController.updateTask(req, res);
});

router.delete("/tasks/:taskId", (req: Request, res: Response) => {
    taskController.deleteTask(req, res);
});

export default router;

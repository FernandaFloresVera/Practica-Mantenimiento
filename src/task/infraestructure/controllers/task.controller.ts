import { Request, Response } from "express"; 
import { CreateTaskUseCase } from "@src/task/aplication/uses-cases/create-task.use-case";
import { GetTaskUseCase } from "@src/task/aplication/uses-cases/get-task.use-case";
import { UpdateTaskUseCase } from "@src/task/aplication/uses-cases/update-tast.use-case";
import { DeleteTaskUseCase } from "@src/task/aplication/uses-cases/delete-task.use-case";

export class TaskController {
    constructor(
        private readonly createTaskUseCase: CreateTaskUseCase,
        private readonly getTaskUseCase: GetTaskUseCase,
        private readonly updateTaskUseCase: UpdateTaskUseCase,
        private readonly deleteTaskUseCase: DeleteTaskUseCase
    ) {}

    async createTask(req: Request, res: Response): Promise<void> {
        const { content } = req.body;

        try {
            const task = await this.createTaskUseCase.execute(content);
            res.status(201).json(task);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async getTask(req: Request, res: Response): Promise<void> {
        const taskId = req.params.taskId;

        try {
            const task = await this.getTaskUseCase.execute(taskId);
            if (task) {
                res.status(200).json(task);
            } else {
                res.status(404).json({ error: "Task not found" });
            }
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async updateTask(req: Request, res: Response): Promise<void> {
        const taskId = req.params.taskId;
        const updatedTask = req.body;

        try {
            const task = await this.updateTaskUseCase.execute(taskId, updatedTask);
            if (task) {
                res.status(200).json(task);
            } else {
                res.status(404).json({ error: "Task not found" });
            }
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async deleteTask(req: Request, res: Response): Promise<void> {
        const taskId = req.params.taskId;

        try {
            await this.deleteTaskUseCase.execute(taskId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

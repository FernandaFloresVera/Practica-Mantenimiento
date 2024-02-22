import { Task } from "@src/task/domain/entities/task";
import { taskInterface } from "@src/task/domain/interfaces/task.interface";


export class TaskRepository {
    private tasks: Map<string, Task>;

    constructor() {
        this.tasks = new Map<string, Task>();
    }

    async createTask(task: Task): Promise<void> {
        this.tasks.set(task.id, task);
    }

    async getTask(taskId: string): Promise<Task | null> {
        const task = this.tasks.get(taskId);
        return task ? task : null;
    }

    async updateTask(task: Task): Promise<void> {
        if (this.tasks.has(task.id)) {
            this.tasks.set(task.id, task);
        } else {
            throw new Error("No se encontro la tarea");
        }
    }

    async deleteTask(taskId: string): Promise<void> {
        if (this.tasks.has(taskId)) {
            this.tasks.delete(taskId);
        } else {
            throw new Error("No se encontro");
        }
    }

    async getAllTasks(): Promise<Task[]> {
        return Array.from(this.tasks.values());
    }
}

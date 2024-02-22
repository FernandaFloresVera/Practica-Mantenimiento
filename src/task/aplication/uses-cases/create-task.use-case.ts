import { Task } from "@src/task/domain/entities/task";
import { taskInterface } from "@src/task/domain/interfaces/task.interface";
import { TaskRepository } from "@src/task/infraestructure/repositories/task-task.repositories";


export class CreateTaskUseCase {
    constructor(readonly taskRepository: TaskRepository) {
    }

    async execute(content: string): Promise<Task> {
        const id = this.generateId();
        const task = new Task(id, content, false);
        return await this.taskRepository.getAllTasks;
    }

    private generateId(): string {
        return Math.random().toString(36).substring(7);
    }
}

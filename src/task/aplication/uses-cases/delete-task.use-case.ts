import { Task } from "@src/task/domain/entities/task";
import { taskInterface } from "@src/task/domain/interfaces/task.interface";
import { TaskRepository } from "@src/task/infraestructure/repositories/task-task.repositories";

export class DeleteTaskUseCase {
    constructor(readonly taskRepository: TaskRepository) {
    }

    async execute(taskId: string): Promise<void> {
        await this.taskRepository.deleteTask(taskId);
    }
}

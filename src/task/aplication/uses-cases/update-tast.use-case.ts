import { Task } from "@src/task/domain/entities/task";
import { taskInterface } from "@src/task/domain/interfaces/task.interface";
import { TaskRepository } from "@src/task/infraestructure/repositories/task-task.repositories";

export class UpdateTaskUseCase {
    constructor(readonly taskRepository: TaskRepository) {
    }

    async execute(taskId: string, updatedTask: Task): Promise<Task | null> {
        const existingTask = await this.taskRepository.getTask(taskId);

        if (existingTask) {

            existingTask.status = updatedTask.status;
        
            await this.taskRepository.updateTask(existingTask);

            return existingTask;
        }

        return null; 
    }
}

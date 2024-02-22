import { Task } from "../entities/task";

export interface taskInterface {
    createTask(task: Task): void;
    getTask(taskId: string): Task | null;
    UpdateTask(taskId: string, updatedTask: Task): void;
    DeleteTask(taskId: string ): void;
}


  
 
 


import { Task } from "../entities";
import { TaskRepository } from "../repositories";

export class GetTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(id: number): Promise<Task> {
    const task = await this.taskRepository.get(id);

    if (!task) throw new Error("Task not found");

    return task;
  }
}

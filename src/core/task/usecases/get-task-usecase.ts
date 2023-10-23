import { Task, TaskRepository } from "../..";
import { GetTaskUseCaseInterface } from "../domain/task-usecase";

export class GetTaskUseCase implements GetTaskUseCaseInterface {
  constructor(private taskRepository: TaskRepository) {}

  async execute(id: number): Promise<Task> {
    const task = await this.taskRepository.get(id);

    if (!task) throw new Error("Task not found");

    return task;
  }
}

import { TaskRepository } from "../..";
import { AddTaskUseCaseInterface } from "../domain/task-usecase";

export class AddTaskUseCase implements AddTaskUseCaseInterface {
  constructor(private taskRepository: TaskRepository) {}

  async execute(
    title: string,
    description?: string | undefined | null
  ): Promise<void> {
    if (!title) throw new Error("Title is required");

    await this.taskRepository.add(title, description, false);
  }
}

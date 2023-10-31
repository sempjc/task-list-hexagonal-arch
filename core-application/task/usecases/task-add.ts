import { TaskRepository } from "../repositories";

export class AddTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(
    title: string,
    description?: string | undefined | null
  ): Promise<void> {
    if (!title) throw new Error("Title is required");

    await this.taskRepository.add(title, description, false);
  }
}

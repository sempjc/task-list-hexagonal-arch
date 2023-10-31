import { TaskRepository } from "../repositories";

export class RemoveTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(id: number): Promise<void> {
    const task = await this.taskRepository.get(id);

    if (!task) throw new Error("Task does not exist");

    this.taskRepository.remove(id);
  }
}

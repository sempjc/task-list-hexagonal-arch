import { TaskRepository } from "../..";
import { UpdateTaskUseCaseInterface } from "../domain/task-usecase";

export class UpdateTaskUseCase implements UpdateTaskUseCaseInterface {
  constructor(private taskRepository: TaskRepository) {}

  async execute(
    id: number,
    title?: string,
    description?: string | undefined | null,
    isComplete?: boolean
  ) {
    const task = await this.taskRepository.get(id);

    if (!task) throw new Error("Task not found");

    await this.taskRepository.update(
      id,
      new Date(),
      title || task.title,
      description || task.description,
      isComplete || task.isComplete
    );
  }
}

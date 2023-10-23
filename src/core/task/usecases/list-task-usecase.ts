import { Task, TaskRepository } from "../..";
import { ListTaskUseCaseInterface } from "../domain/task-usecase";

export class ListTaskUseCase implements ListTaskUseCaseInterface {
  constructor(private taskRepository: TaskRepository) {}

  async execute(): Promise<Task[]> {
    return this.taskRepository.list();
  }
}

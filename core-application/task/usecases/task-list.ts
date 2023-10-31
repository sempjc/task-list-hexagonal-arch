import { Task } from "../entities";
import { TaskRepository } from "../repositories";

export class ListTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(): Promise<Task[]> {
    return this.taskRepository.list();
  }
}

import { Task, TaskRepository } from "core-application/task";

export class InMemoryTaskRepository implements TaskRepository {
  private tasks: Task[] = [];

  async add(
    title: string,
    description?: string | undefined | null,
    isComplete: boolean = false
  ) {
    const newTask = {
      title,
      description,
      isComplete,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: new Date().getTime(),
    };

    this.tasks.push(newTask);
  }

  async list() {
    return [...this.tasks];
  }

  async remove(id: number) {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks.splice(index, 1);
  }

  async get(id: number) {
    const task = this.tasks.find((task) => task.id === id);
    return task;
  }

  async update(
    id: number,
    updatedAt: Date,
    title: string,
    description: string | undefined | null,
    isComplete: boolean
  ) {
    const index = this.tasks.findIndex((task) => task.id === id);

    this.tasks[index] = {
      ...this.tasks[index],
      title,
      description,
      isComplete,
      updatedAt,
    };
  }
}

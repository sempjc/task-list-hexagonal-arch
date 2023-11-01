import * as fs from "node:fs/promises";
import { Task, TaskRepository } from "core-application/task";

export class LocalFileDirectoryTaskRepository implements TaskRepository {
  constructor(private readonly path: string) {
    fs.mkdir(path, { recursive: true });
  }

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

    await fs.writeFile(
      this.filePath(newTask.id),
      JSON.stringify(newTask),
      "utf-8"
    );
  }

  async list() {
    const files = await fs.readdir(this.path);

    const tasks: Task[] = [];

    for (const file of files) {
      const task = await fs.readFile(`${this.path}/${file}`, "utf-8");

      tasks.push(JSON.parse(task));
    }

    return tasks;
  }

  async remove(id: number) {
    await fs.unlink(this.filePath(id));
  }

  async get(id: number) {
    const task = await fs.readFile(this.filePath(id), "utf-8");

    return JSON.parse(task);
  }

  async update(
    id: number,
    updatedAt: Date,
    title: string,
    description: string | undefined | null,
    isComplete: boolean
  ) {
    const task = await this.get(id);

    const updatedTask = {
      ...task,
      title,
      description,
      isComplete,
      updatedAt,
    };

    await fs.writeFile(this.filePath(id), JSON.stringify(updatedTask), "utf-8");
  }

  private filePath(pathName: number | string): string {
    return `${this.path}/${pathName}.json`;
  }
}

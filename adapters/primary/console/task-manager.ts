import {
  AddTaskUseCase,
  GetTaskUseCase,
  ListTaskUseCase,
  RemoveTaskUseCase,
  UpdateTaskUseCase,
} from "core-application";

export class TaskManager {
  constructor(
    private readonly _addTask: AddTaskUseCase,
    private readonly _getTask: GetTaskUseCase,
    private readonly _updateTask: UpdateTaskUseCase,
    private readonly _listTask: ListTaskUseCase,
    private readonly _removeTask: RemoveTaskUseCase
  ) {}

  async AddTask(
    title: string,
    options: { description?: string; completed?: boolean }
  ) {
    const { description } = options;

    try {
      await this._addTask.execute(title, description);
    } catch (e) {
      console.error(e);
    }
  }

  async GetTask(id: string) {
    try {
      const taskId = parseInt(id);

      const task = await this._getTask.execute(taskId);

      console.log(task);
    } catch (e) {
      console.error(e);
    }
  }

  async UpdateTask(
    id: string,
    options: {
      title?: string;
      description?: string;
      completed?: boolean;
    }
  ) {
    const { title, description, completed } = options;

    try {
      const taskId = parseInt(id);

      await this._updateTask.execute(taskId, title, description, completed);
    } catch (e) {
      console.error(e);
    }
  }

  async ListTask() {
    try {
      const tasks = await this._listTask.execute();

      if (tasks.length === 0) {
        console.log("No tasks found");
        return;
      }

      for (const task of tasks) console.log(task);
    } catch (e) {
      console.error(e);
    }
  }

  async RemoveTask(id: string) {
    try {
      const taskId = parseInt(id);

      await this._removeTask.execute(taskId);
    } catch (e) {
      console.error(e);
    }
  }
}

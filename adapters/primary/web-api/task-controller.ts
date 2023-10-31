import { Request, Response } from "express";
import {
  AddTaskUseCase,
  GetTaskUseCase,
  ListTaskUseCase,
  RemoveTaskUseCase,
  UpdateTaskUseCase,
} from "core-application";

export class TaskController {
  constructor(
    private readonly _addTask: AddTaskUseCase,
    private readonly _getTask: GetTaskUseCase,
    private readonly _listTask: ListTaskUseCase,
    private readonly _removeTask: RemoveTaskUseCase,
    private readonly _updateTask: UpdateTaskUseCase
  ) {}

  async add(req: Request, res: Response): Promise<void> {
    const { title, description } = req.body;

    try {
      const task = await this._addTask.execute(title, description);

      res.status(201).json(task);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async get(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const task = await this._getTask.execute(Number(id));

      res.status(200).json(task);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async list(_req: Request, res: Response): Promise<void> {
    try {
      const tasks = await this._listTask.execute();

      res.status(200).json(tasks);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async remove(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const task = await this._removeTask.execute(Number(id));

      res.status(200).json(task);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    try {
      const task = await this._updateTask.execute(
        Number(id),
        title,
        description,
        completed
      );

      res.status(200).json(task);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}

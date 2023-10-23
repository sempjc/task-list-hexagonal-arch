import { Task } from "./task-entity";

export interface AddTaskUseCaseInterface {
  execute: (
    title: string,
    description?: string | undefined | null,
    isComplete?: boolean
  ) => Promise<void>;
}

export interface GetTaskUseCaseInterface {
  execute: (id: number) => Promise<Task>;
}

export interface ListTaskUseCaseInterface {
  execute: () => Promise<Task[]>;
}

export interface RemoveTaskUseCaseInterface {
  execute: (id: number) => Promise<void>;
}

export interface UpdateTaskUseCaseInterface {
  execute: (
    id: number,
    title?: string,
    description?: string | undefined | null,
    isComplete?: boolean
  ) => Promise<void>;
}

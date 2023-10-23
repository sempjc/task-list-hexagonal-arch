import { Task } from "./task-entity";

export interface TaskRepository {
  readonly add: (
    title: string,
    description?: string | undefined | null,
    isComplete?: boolean
  ) => Promise<void>;

  readonly get: (id: number) => Promise<Task | undefined>;

  readonly list: () => Promise<Task[]>;

  readonly remove: (id: number) => Promise<void>;

  readonly update: (
    id: number,
    updatedAt: Date,
    title: string,
    description: string | undefined | null,
    isComplete: boolean
  ) => Promise<void>;
}

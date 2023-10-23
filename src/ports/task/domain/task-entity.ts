export type Task = {
  readonly id: number;

  readonly title: string;

  readonly description?: string | undefined | null;

  readonly isComplete: boolean;

  readonly createdAt: Date;

  readonly updatedAt: Date;
};

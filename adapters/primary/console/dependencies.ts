import {
  AddTaskUseCase,
  GetTaskUseCase,
  ListTaskUseCase,
  RemoveTaskUseCase,
  UpdateTaskUseCase,
  TaskRepository,
} from "core-application";

import { LocalFileDirectoryTaskRepository } from "dev-repository";

const Repository: TaskRepository = new LocalFileDirectoryTaskRepository();

const AddTask = new AddTaskUseCase(Repository);

const GetTask = new GetTaskUseCase(Repository);

const UpdateTask = new UpdateTaskUseCase(Repository);

const ListTask = new ListTaskUseCase(Repository);

const RemoveTask = new RemoveTaskUseCase(Repository);

export const dependencyContainer = {
  Repository,
  AddTask,
  GetTask,
  UpdateTask,
  ListTask,
  RemoveTask,
};

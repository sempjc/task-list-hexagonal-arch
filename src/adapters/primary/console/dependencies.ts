import {
  AddTaskUseCaseInterface,
  GetTaskUseCaseInterface,
  ListTaskUseCaseInterface,
  RemoveTaskUseCaseInterface,
  TaskRepository,
  UpdateTaskUseCaseInterface,
} from "../../../core/task";

import {
  AddTaskUseCase,
  GetTaskUseCase,
  ListTaskUseCase,
  RemoveTaskUseCase,
  UpdateTaskUseCase,
} from "../../../domain/task/usecases";

import { LocalFileDirectoryTaskRepository } from "../../secondary";

const Repository: TaskRepository = new LocalFileDirectoryTaskRepository();

const AddTask: AddTaskUseCaseInterface = new AddTaskUseCase(Repository);

const GetTask: GetTaskUseCaseInterface = new GetTaskUseCase(Repository);

const UpdateTask: UpdateTaskUseCaseInterface = new UpdateTaskUseCase(
  Repository
);

const ListTask: ListTaskUseCaseInterface = new ListTaskUseCase(Repository);

const RemoveTask: RemoveTaskUseCaseInterface = new RemoveTaskUseCase(
  Repository
);

export const dependencyContainer = {
  Repository,
  AddTask,
  GetTask,
  UpdateTask,
  ListTask,
  RemoveTask,
};

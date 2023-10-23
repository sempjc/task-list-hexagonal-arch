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
import { TaskController } from "./task-controller";

const Repository: TaskRepository = new LocalFileDirectoryTaskRepository();

const AddTask: AddTaskUseCaseInterface = new AddTaskUseCase(Repository);

const GetTask: GetTaskUseCaseInterface = new GetTaskUseCase(Repository);

const ListTask: ListTaskUseCaseInterface = new ListTaskUseCase(Repository);

const RemoveTask: RemoveTaskUseCaseInterface = new RemoveTaskUseCase(
  Repository
);

const UpdateTask: UpdateTaskUseCaseInterface = new UpdateTaskUseCase(
  Repository
);

const taskController: TaskController = new TaskController(
  AddTask,
  GetTask,
  ListTask,
  RemoveTask,
  UpdateTask
);

const Controllers = {
  taskController,
};

export const dependencies = {
  AddTask,
  GetTask,
  ListTask,
  RemoveTask,
  UpdateTask,
  Controllers,
};

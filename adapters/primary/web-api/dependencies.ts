import {
  AddTaskUseCase,
  GetTaskUseCase,
  ListTaskUseCase,
  RemoveTaskUseCase,
  TaskRepository,
  UpdateTaskUseCase,
} from "core-application";

import { LocalFileDirectoryTaskRepository } from "dev-repository";

import { TaskController } from "./task-controller";

const Repository: TaskRepository = new LocalFileDirectoryTaskRepository();

const AddTask = new AddTaskUseCase(Repository);

const GetTask = new GetTaskUseCase(Repository);

const ListTask = new ListTaskUseCase(Repository);

const RemoveTask = new RemoveTaskUseCase(Repository);

const UpdateTask = new UpdateTaskUseCase(Repository);

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

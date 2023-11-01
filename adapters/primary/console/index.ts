import { Command } from "commander";
import { dependencyContainer as dependency } from "./app/dependencies";
import { TaskManager } from "./app/task-manager";

const taskManager = new TaskManager(
  dependency.AddTask,
  dependency.GetTask,
  dependency.UpdateTask,
  dependency.ListTask,
  dependency.RemoveTask
);

const program = new Command();
program.version("0.0.1");

program
  .command("add <title>")
  .description("Add a new task to the task manager")
  .option("-d, --description [description]")
  .option("-c --completed [completed]", "Mark task as completed", false)
  .action(async (title, options) => await taskManager.AddTask(title, options));

program
  .command("get <id>")
  .description("Get a task by id")
  .action(async (id) => await taskManager.GetTask(id));

program
  .command("list")
  .description("List all tasks")
  .action(async () => await taskManager.ListTask());

program
  .command("remove <id>")
  .description("Remove a task by id")
  .action(async (id) => await taskManager.RemoveTask(id));

program
  .command("update <id>")
  .description("Update a task by id")
  .option("-t, --title [title]", "Update task title")
  .option("-d, --description [description]", "Update task description")
  .option("-c --completed [completed]", "Mark task as completed", false)
  .action(async (id, options) => await taskManager.UpdateTask(id, options));

program.parse(process.argv);

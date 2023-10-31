import { Command } from "commander";
import { dependencyContainer as dependency } from "./dependencies";
import { TaskManager } from "./task-manager";

const taskManager = new TaskManager(
  dependency.AddTask,
  dependency.GetTask,
  dependency.UpdateTask,
  dependency.ListTask,
  dependency.RemoveTask
);

const program = new Command();
program
  // Program version
  .version("0.0.1")

  // Add task command
  .command("add <title>")
  .option("-d, --description [description]")
  .option("-c --completed [completed]", "Mark task as completed", false)
  .action(async (title, options) => await taskManager.AddTask(title, options))

  // Get task by id command
  .command("get <id>")
  .action(async (id) => await taskManager.GetTask(id))

  // List all task command
  .command("list")
  .action(async () => await taskManager.ListTask())

  // Remove task command
  .command("remove <id>")
  .action(async (id) => await taskManager.RemoveTask(id))

  // Update a task by id command
  .command("update <id>")
  .option("-t, --title [title]")
  .option("-d, --description [description]")
  .option("-c --completed [completed]", "Mark task as completed", false)
  .action(async (id, options) => await taskManager.UpdateTask(id, options))

  // Parse arguments from Command Line
  .parse(process.argv);

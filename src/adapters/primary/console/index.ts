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
program.version("0.0.1");

program
  .command("add <title>")
  .option("-d, --description [description]")
  .option("-c --completed [completed]", "Mark task as completed", false)
  .action(async (title, options) => await taskManager.AddTask(title, options));

program.command("get <id>").action(async (id) => await taskManager.GetTask(id));

program.command("list").action(async () => await taskManager.ListTask());

program
  .command("remove <id>")
  .action(async (id) => await taskManager.RemoveTask(id));

program
  .command("update <id>")
  .option("-t, --title [title]")
  .option("-d, --description [description]")
  .option("-c --completed [completed]", "Mark task as completed", false)
  .action(async (id, options) => await taskManager.UpdateTask(id, options));

program.parse(process.argv);

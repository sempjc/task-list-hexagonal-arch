import express from "express";
import { dependencies } from "./dependencies";

const { Controllers } = dependencies;

const app = express();

const port = 4000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello World! Welcome to Task Manager API");
});

app.get(
  "/api/tasks",
  async (req, res) => await Controllers.taskController.list(req, res)
);

app.get(
  "/api/task/:id",
  async (req, res) => await Controllers.taskController.get(req, res)
);
app.post(
  "/api/task",
  async (req, res) => await Controllers.taskController.add(req, res)
);

app.delete("/task/:id", async (req, res) =>
  Controllers.taskController.remove(req, res)
);

app.put(
  "/api/task/:id",
  async (req, res) => await Controllers.taskController.update(req, res)
);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

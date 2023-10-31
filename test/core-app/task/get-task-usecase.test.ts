import { beforeEach, describe, expect, it } from "vitest";
import { GetTaskUseCase, TaskRepository } from "core-application";
import { InMemoryTaskRepository } from "dev-repository";

describe("GetTaskUseCase", () => {
  let getTask: GetTaskUseCase;
  let repository: TaskRepository;

  beforeEach(() => {
    repository = new InMemoryTaskRepository();
    getTask = new GetTaskUseCase(repository);
  });

  it("Should get a task from repository", async () => {
    // Arrrange
    repository.add("title", "description");

    const task = (await repository.list())[0];

    // Act
    const returnedTask = await getTask.execute(task.id);

    // Assert
    expect(task).toBe(returnedTask);
  });

  it("Should throw an error if task not found", async () => {
    // Act
    const act = async () => await getTask.execute(1);

    // Assert
    expect(act).rejects.toThrowError("Task not found");
  });
});

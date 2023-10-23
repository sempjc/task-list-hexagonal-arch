import { describe, expect, it } from "vitest";
import { GetTaskUseCase, InMemoryTaskRepository } from "../../src";

describe("GetTaskUseCase", () => {
  it("Should get a task from repository", async () => {
    // Arrrange
    const repository = new InMemoryTaskRepository();
    repository.add("title", "description");

    const task = (await repository.list())[0];

    const getTask = new GetTaskUseCase(repository);

    // Act
    const returnedTask = await getTask.execute(task.id);

    // Assert
    expect(task).toBe(returnedTask);
  });

  it("Should throw an error if task not found", async () => {
    // Arrange
    const repository = new InMemoryTaskRepository();

    const getTask = new GetTaskUseCase(repository);

    // Act
    const act = async () => await getTask.execute(1);

    // Assert
    expect(act).rejects.toThrowError("Task not found");
  });
});

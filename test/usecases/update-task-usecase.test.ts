import { describe, expect, it } from "vitest";
import { InMemoryTaskRepository, UpdateTaskUseCase, Task } from "../../src";

describe("UpdateTaskUseCase", () => {
  it("Should update task from repository", async () => {
    // Arrange
    const repository = new InMemoryTaskRepository();
    repository.add("title", "description");

    const updateTask = new UpdateTaskUseCase(repository);

    const task: Task = (await repository.list())[0];

    // Act
    await updateTask.execute(task.id, "new title", "new description", true);

    // Assert
    const updatedTask = await repository.get(task.id);

    expect(updatedTask?.title).toBe("new title");
    expect(updatedTask?.description).toBe("new description");
    expect(updatedTask?.isComplete).toBe(true);
  });

  it("Shoud throw error if task not found", async () => {
    // Arrange
    const repository = new InMemoryTaskRepository();
    repository.add("title", "description");

    const updateTask = new UpdateTaskUseCase(repository);

    // Act
    const act = async () =>
      await updateTask.execute(0, "new title", "new description", true);

    // Assert
    expect(act).rejects.toThrowError();
  });
});

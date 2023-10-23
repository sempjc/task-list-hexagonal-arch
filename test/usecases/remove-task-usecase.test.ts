import { describe, expect, it } from "vitest";
import { InMemoryTaskRepository, RemoveTaskUseCase, Task } from "../../src";

describe("RemoveTaskUseCase", () => {
  it("Should remove task from repository", async () => {
    // Arrange
    const repository = new InMemoryTaskRepository();
    repository.add("title", "description");

    const task: Task = (await repository.list())[0];
    const removeTask = new RemoveTaskUseCase(repository);

    // Act
    await removeTask.execute(task.id);

    // Assert
    const length = (await repository.list()).length;
    expect(length).toBe(0);
  });

  it("Should throw error if task does not exist", async () => {
    // Arrange
    const repository = new InMemoryTaskRepository();
    const removeTask = new RemoveTaskUseCase(repository);

    // Act & Assert
    await expect(
      async () => await removeTask.execute(1)
    ).rejects.toThrowError();
  });
});

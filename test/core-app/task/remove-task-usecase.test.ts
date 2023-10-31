import { beforeEach, describe, expect, it } from "vitest";
import { RemoveTaskUseCase, Task } from "core-application";
import { InMemoryTaskRepository } from "dev-repository";

describe("RemoveTaskUseCase", () => {
  let repository: InMemoryTaskRepository;
  let removeTask: RemoveTaskUseCase;

  beforeEach(() => {
    repository = new InMemoryTaskRepository();
    removeTask = new RemoveTaskUseCase(repository);
  });

  it("Should remove task from repository", async () => {
    // Arrange
    repository.add("title", "description");

    const task: Task = (await repository.list())[0];

    // Act
    await removeTask.execute(task.id);

    // Assert
    const length = (await repository.list()).length;
    expect(length).toBe(0);
  });

  it("Should throw error if task does not exist", async () => {
    // Act & Assert
    await expect(
      async () => await removeTask.execute(1)
    ).rejects.toThrowError();
  });
});

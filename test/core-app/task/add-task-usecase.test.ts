import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryTaskRepository } from "dev-repository";
import { AddTaskUseCase, TaskRepository } from "core-application";

describe("AddTaskUseCase", () => {
  let addTask: AddTaskUseCase;
  let repository: TaskRepository;

  beforeEach(() => {
    repository = new InMemoryTaskRepository();
    addTask = new AddTaskUseCase(repository);
  });

  it("Should add task to repository", async () => {
    // Arrange
    const title = "title";

    const description = "description";

    // Act
    await addTask.execute(title, description);

    // Assert
    const tasks = await repository.list();
    expect(tasks.length).toBe(1);
  });

  it("Shoud add task without description", async () => {
    // Arrange
    const title = "title";

    // Act
    await addTask.execute(title);

    // Assert
    const tasks = await repository.list();
    expect(tasks.length).toBe(1);
  });

  it("Should throw error if title is empty", async () => {
    // Arrange
    const title = "";

    const description = "description";

    // Act
    expect(
      async () => await addTask.execute(title, description)
    ).rejects.toThrowError("Title is required");

    // Assert
    const tasks = await repository.list();
    expect(tasks.length).toBe(0);
  });
});

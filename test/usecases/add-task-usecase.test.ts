import { describe, expect, it } from "vitest";
import { InMemoryTaskRepository, AddTaskUseCase } from "../../src";

describe("AddTaskUseCase", () => {
  it("Should add task to repository", async () => {
    // Arrange
    const title = "title";

    const description = "description";

    const repository = new InMemoryTaskRepository();

    const addTask = new AddTaskUseCase(repository);

    // Act
    await addTask.execute(title, description);

    // Assert
    const tasks = await repository.list();
    expect(tasks.length).toBe(1);
  });

  it("Shoud add task without description", async () => {
    // Arrange
    const title = "title";

    const repository = new InMemoryTaskRepository();

    const addTask = new AddTaskUseCase(repository);

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

    const repository = new InMemoryTaskRepository();

    const addTask = new AddTaskUseCase(repository);

    // Act
    expect(
      async () => await addTask.execute(title, description)
    ).rejects.toThrowError("Title is required");

    // Assert
    const tasks = await repository.list();
    expect(tasks.length).toBe(0);
  });
});

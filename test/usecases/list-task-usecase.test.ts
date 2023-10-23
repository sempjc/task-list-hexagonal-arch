import { describe, expect, it } from "vitest";
import { Task, InMemoryTaskRepository, ListTaskUseCase } from "../../src";

describe("ListTaskUseCase", () => {
  it("Should list tasks", async () => {
    // Arrange
    const repository = new InMemoryTaskRepository();
    repository.add("title", "description");

    const listTask = new ListTaskUseCase(repository);

    // Act
    const tasks: Task[] = await listTask.execute();

    // Assert
    expect(tasks.length).toBe(1);
  });

  it("Should return empty array if no tasks", async () => {
    // Arrange
    const repository = new InMemoryTaskRepository();

    const listTask = new ListTaskUseCase(repository);

    // Act
    const tasks: Task[] = await listTask.execute();

    // Assert
    expect(tasks.length).toBe(0);
  });
});

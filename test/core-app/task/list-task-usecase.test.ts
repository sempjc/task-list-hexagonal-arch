import { beforeEach, describe, expect, it } from "vitest";
import { Task, ListTaskUseCase } from "core-application";
import { InMemoryTaskRepository } from "dev-repository";

describe("ListTaskUseCase", () => {
  let listTask: ListTaskUseCase;
  let repository: InMemoryTaskRepository;

  beforeEach(() => {
    repository = new InMemoryTaskRepository();
    listTask = new ListTaskUseCase(repository);
  });

  it("Should list tasks", async () => {
    // Arrange
    repository.add("title", "description");

    // Act
    const tasks: Task[] = await listTask.execute();

    // Assert
    expect(tasks.length).toBe(1);
  });

  it("Should return empty array if no tasks", async () => {
    // Act
    const tasks: Task[] = await listTask.execute();

    // Assert
    expect(tasks.length).toBe(0);
  });
});

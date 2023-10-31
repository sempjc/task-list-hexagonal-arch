import { beforeEach, describe, expect, it } from "vitest";
import { UpdateTaskUseCase, Task, TaskRepository } from "core-application";
import { InMemoryTaskRepository } from "dev-repository";

describe("UpdateTaskUseCase", () => {
  let repository: TaskRepository;
  let updateTask: UpdateTaskUseCase;

  beforeEach(() => {
    repository = new InMemoryTaskRepository();
    updateTask = new UpdateTaskUseCase(repository);
  });

  it("Should update task from repository", async () => {
    // Arrange
    repository.add("title", "description");

    const task: Task = (await repository.list())[0];

    const newTask = {
      title: "new title",
      description: "new description",
      isComplete: true,
    };

    // Act
    await updateTask.execute(
      task.id,
      newTask.title,
      newTask.description,
      newTask.isComplete
    );

    // Assert
    const result = await repository.get(task.id);

    const updatedTask = result && {
      title: result.title,
      description: result.description,
      isComplete: result.isComplete,
    };

    expect(updatedTask).toEqual(newTask);
  });

  it("Shoud throw error if task not found", async () => {
    // Arrange
    repository.add("title", "description");

    // Act
    const act = async () =>
      await updateTask.execute(0, "new title", "new description", true);

    // Assert
    expect(act).rejects.toThrowError();
  });
});

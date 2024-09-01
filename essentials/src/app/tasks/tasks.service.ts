import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { Task, TaskDTO } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Task[] = DUMMY_TASKS;

  constructor() {
const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    } else {
      this.tasks = DUMMY_TASKS;
      this.saveTasks();
    }
  }

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskDto: TaskDTO, userId: string) {
    const task: Task = {
      ...taskDto,
      userId,
      id: Math.random().toString(36).substring(7),
    };
    this.tasks.unshift(task);
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

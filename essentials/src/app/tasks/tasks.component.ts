import { Component, Input } from '@angular/core';
import { User } from '../user/user.model';
import { TaskDTO } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
  isAdding: boolean = false;

  // private tasksService = inject(TasksService);
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user.id);
  }
  

  handleTaskDialogOpen() {
    this.isAdding = true;
  }

  handleTaskCreate(taskDto: TaskDTO) {
    this.closeTaskDialog();
    this.tasksService.addTask(taskDto, this.user.id);
  }

  handleTaskCreateCancel() {
    this.closeTaskDialog();
  }

  private closeTaskDialog() {
    this.isAdding = false;
  }
}

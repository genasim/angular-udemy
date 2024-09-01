import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskComponent, NewTaskComponent, TasksComponent],
  imports: [SharedModule, DatePipe, FormsModule],
  exports: [TasksComponent],
})
export class TasksModule { }

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskDTO } from '../task/task.model';
import { User } from '../../user/user.model';

@Component({  
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Output() create = new EventEmitter<TaskDTO>();
  @Input() user?: User;

  formState = {
    title: '',
    summary: '',
    dueDate: '',
  };
  // formState = signal<TaskDTO>({
  //   title: '',
  //   summary: '',
  //   dueDate: '',
  // });


  onCloseDialog() {
    this.close.emit();
  }

  onTaskSubmit(formState: TaskDTO) {
    this.create.emit(formState);
    this.onCloseDialog();
  }
}

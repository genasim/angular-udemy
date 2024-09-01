import { Component, computed, Input, input, output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input() avatar!: string;
  // @Input({ required: true }) name!: string;

  // get imagePath() {
  //   return `assets/users/${this.avatar()}`;
  // }
  @Input() selected?: boolean;
  user = input.required<User>();
  imagePath = computed(() => `assets/users/${this.user().avatar}`);

  // @Input({ required: true }) user!: typeof DUMMY_USERS[number];
  // @Output() select = new EventEmitter();
  select = output<string>();

  onSelectedUser() {
    this.select.emit(this.user().id);
  }
}

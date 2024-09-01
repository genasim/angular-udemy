import { Component, inject } from '@angular/core';
import { User } from './user/user.model';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedUserId?: string;

  private usersService = inject(UserService);

  get selectedUser(): User | undefined {
    return this.usersService.getSelectedUser();
  }

  get users(): readonly User[] {
    return this.usersService.getUsers();
  }

  handleSelectedUser(id: string) {
    this.usersService.setSelectedUser(id);
  }
}

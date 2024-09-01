import { Injectable } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[] = DUMMY_USERS;
  private selectedUser?: string;

  getUsers(): readonly User[] {
    return this.users;
  }

  getSelectedUser(): User | undefined {
    return this.users.find((user) => user.id === this.selectedUser);
  }

  setSelectedUser(id: string) {
    const found = this.users.find((user) => user.id === id);
    this.selectedUser = found?.id;
  }
}

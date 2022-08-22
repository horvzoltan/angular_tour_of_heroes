import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Hero} from '../hero';
import {User} from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe(
      next => {
        this.users = next.results;
      });
  }

  filteredUsers(): User[] {
    return this.users.filter((u)=> u.gender === 'female');
  }
}

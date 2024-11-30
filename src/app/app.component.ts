import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UserListServiceService } from './services/user-list-service.service';

interface IUserProps {
  firstName: string;
  image: string;
  gender: string;
  email: string;
  phone: string;
}

interface IUser {
  users: IUserProps[];
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public usersMock: any;

  constructor(private service: UserListServiceService) {
    this.service.getUsers().subscribe((data: IUser) => {
      this.usersMock = data;
    });
  }

  title = 'users-angular';
}

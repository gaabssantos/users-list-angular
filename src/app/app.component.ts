import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UserListServiceService } from './services/user-list-service.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
  imports: [RouterOutlet, UserComponent, MatProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public usersMock: any;
  public loading = signal(false);

  constructor(private service: UserListServiceService) {
    this.loading.set(true);
    this.service.getUsers().subscribe((data: IUser) => {
      this.usersMock = data;
      this.loading.set(false);
    });
  }

  title = 'users-angular';
}

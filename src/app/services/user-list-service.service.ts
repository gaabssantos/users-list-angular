import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserListServiceService {
  private apiUrl = 'https://dummyjson.com/users?limit=10';

  constructor(private client: HttpClient) {}

  getUsers(): Observable<any> {
    return this.client.get(this.apiUrl);
  }
}

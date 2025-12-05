import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// This is the shape of our data (Must match Java!)
export interface User {
  id?: number;
  username: string;
  email: string;
  phoneNumber: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // The address of your Java Backend
  private apiUrl = 'http://localhost:8080/user';

  // Inject the "Phone" (HttpClient)
  constructor(private http: HttpClient) { }

  // The function to send the data
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/create`, user);
  }

  // Fetch user by ID
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}

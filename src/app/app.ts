import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateUser } from './components/create-user/create-user';
import { UserDetails } from './components/user-details/user-details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreateUser, UserDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('splitpay-frontend');
}

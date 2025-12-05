import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateUser } from './components/create-user/create-user';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CreateUser],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('splitpay-frontend');
}

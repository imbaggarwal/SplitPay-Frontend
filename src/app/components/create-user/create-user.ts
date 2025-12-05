import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <--- Needed for forms
import { UserService, User } from '../../services/user';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, FormsModule], // <--- Add FormsModule here
  templateUrl: './create-user.html',
  styleUrl: './create-user.css'
})
export class CreateUser {

  // The data bucket for the form
  user: User = {
    username: '',
    email: '',
    phoneNumber: ''
  };

  message = ''; // To show success/error text

  // Get the Delivery Guy ready
  constructor(private userService: UserService) {}

  onSubmit() {
    this.message = 'Sending...';

    // Tell the delivery guy to send the package
    this.userService.createUser(this.user).subscribe({
      next: (response) => {
        // Success!
        this.message = `Success! User created with ID: ${response.id}`;
        // Clear the form
        this.user = { username: '', email: '', phoneNumber: '' };
      },
      error: (error) => {
        // Fail!
        console.error(error);
        this.message = 'Error! Check the console (F12).';
      }
    });
  }
}

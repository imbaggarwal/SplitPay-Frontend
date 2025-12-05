import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- Needed for *ngIf
import { FormsModule } from '@angular/forms';   // <--- Needed for input box
import { UserService, User } from '../../services/user';
import { WalletService, Wallet } from '../../services/wallet';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css'
})
export class UserDetails {

  searchId: number | undefined;
  foundUser: User | null = null;
  foundWallet: Wallet | null = null;
  errorMessage = '';

  constructor(
    private userService: UserService,
    private walletService: WalletService
    ) {}

  onSearch() {
    if (!this.searchId) return;

    this.errorMessage = '';
    this.foundUser = null; // Clear previous result
    this.foundWallet = null;

    this.userService.getUserById(this.searchId).subscribe({
      next: (data) => {
        this.foundUser = data;

        if(data.id){
          this.fetchWallet(data.id);
        }
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'User not found (or backend is down).';
      }
    });
  }

  // Helper function to get wallet
   fetchWallet(userId: number) {
     this.walletService.getWallet(userId).subscribe({
       next: (walletData) => {
         this.foundWallet = walletData;
       },
     error: (err) => {
       console.log("Wallet not found (maybe kafka delay?)");
       }
     });
   }
}

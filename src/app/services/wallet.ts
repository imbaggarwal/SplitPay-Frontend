import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Wallet {
  id: number;
  userId: number;
  balance: number;
  currency: string;
}

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  // Notice the port is 8081!
  private apiUrl = 'http://localhost:8081/wallet';

  constructor(private http: HttpClient) { }

  getWallet(userId: number): Observable<Wallet> {
    return this.http.get<Wallet>(`${this.apiUrl}/user/${userId}`);
  }
}

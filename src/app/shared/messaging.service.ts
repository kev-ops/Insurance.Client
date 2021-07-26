import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor() { }

  showOkMessage(): void {
    alert('Transaction successful');
  }
}

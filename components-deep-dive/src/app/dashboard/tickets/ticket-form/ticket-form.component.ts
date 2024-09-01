import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent {
  onSubmit(data: HTMLInputElement) {
    console.log(data.value);
    
    console.log('Ticket form submitted');
  }
}

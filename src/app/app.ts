import { Component } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';

interface Term {
  clientName: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  status: string;
}

@Component({
  selector: 'app-root',
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Beauty Salon Booking';

  selectedTerm: Term | null = null;

  terms: Term[] = [
    {
      clientName: 'Ana Petrović',
      phone: '+381601234567',
      date: '2026-05-10',
      time: '14:00',
      service: 'Hair styling',
      status: 'booked',
    },
    {
      clientName: '',
      phone: '',
      date: '2026-05-10',
      time: '15:00',
      service: 'Facial treatment',
      status: 'available',
    },
    {
      clientName: '',
      phone: '',
      date: '2026-05-10',
      time: '16:00',
      service: 'Manicure',
      status: 'available',
    },
    {
      clientName: 'Marija Jovanović',
      phone: '+381641112233',
      date: '2026-05-10',
      time: '17:00',
      service: 'Pedicure',
      status: 'booked',
    },
  ];

  selectTerm(term: Term) {
    this.selectedTerm = term;
  }

  reserveTerm() {
    if (this.selectedTerm && this.selectedTerm.status === 'available') {
      this.selectedTerm.status = 'booked';
    }
  }
}
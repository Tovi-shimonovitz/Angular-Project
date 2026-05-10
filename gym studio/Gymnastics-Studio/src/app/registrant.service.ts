import { Injectable } from '@angular/core';

export interface Registrant {
  firstName: string;
  lastName: string;
  phone: string;
  idNumber: string;
  class: string;
  price: number;
  isPaid: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrantService {

  private registrants: Registrant[] = [
    {
      firstName: 'יעל',
      lastName: 'כהן',
      phone: '050-1234567',
      idNumber: '123456789',
      class: 'התעמלות אמנותית',
      price: 150,
      isPaid: true
    },
    {
      firstName: 'דניאל',
      lastName: 'לוי',
      phone: '052-9876543',
      idNumber: '987654321',
      class: 'אקרובטיקה',
      price: 200,
      isPaid: false
    },
    {
      firstName: 'שרה',
      lastName: 'גולדברג',
      phone: '053-4567890',
      idNumber: '456789123',
      class: 'ריקוד',
      price: 120,
      isPaid: true
    },
    {
      firstName: 'איתן',
      lastName: 'רוזן',
      phone: '054-3210987',
      idNumber: '321098765',
      class: 'התעמלות אמנותית',
      price: 180,
      isPaid: false
    },
    {
      firstName: 'נועה',
      lastName: 'שמעון',
      phone: '055-6543210',
      idNumber: '654321098',
      class: 'יוגה',
      price: 100,
      isPaid: true
    }
  ];

  constructor() { }

  getRegistrants(): Registrant[] {
    return this.registrants;
  }

  addRegistrant(registrant: Registrant): void {
    this.registrants.push(registrant);
  }
  getCountByClass(className: string): number {
  return this.registrants.filter(r => r.class === className).length;
}
}

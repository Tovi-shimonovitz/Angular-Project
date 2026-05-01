import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleClassComponent } from '../single-class/single-class.component';

interface Class {
  id: number;
  name: string;
  instructor: string;
  numberOfSessions: number;
  startDate: string;
  price: number;
  day: string;
  time: string;
}

@Component({
  selector: 'app-classes-list',
  standalone: true,
  imports: [CommonModule, SingleClassComponent],
  templateUrl: './classes-list.component.html',
  styleUrl: './classes-list.component.css'
})
export class ClassesListComponent {

  classes: Class[] = [
    {
      id: 1,
      name: 'התעמלות קלאסית',
      instructor: 'Chaim Levi',
      numberOfSessions: 12,
      startDate: '2026-04-15',
      price: 450,
      day: 'ראשון',
      time: '10:00 - 11:00'
    },
    {
      id: 2,
      name: 'התעמלות אמנותית',
      instructor: 'Mordechai Cohen',
      numberOfSessions: 10,
      startDate: '2026-04-22',
      price: 500,
      day: 'שלישי',
      time: '16:00 - 17:00'
    },
    {
      id: 3,
      name: 'התעמלות ילדים',
      instructor: 'Yosef Mizrahi',
      numberOfSessions: 15,
      startDate: '2026-05-10',
      price: 400,
      day: 'שני',
      time: '15:00 - 16:00'
    },
    {
      id: 4,
      name: 'התעמלות מתקדמות',
      instructor: 'Chaim Levi',
      numberOfSessions: 8,
      startDate: '2026-05-20',
      price: 600,
      day: 'רביעי',
      time: '18:00 - 19:30'
    },
    {
      id: 5,
      name: 'התעמלות קרקע',
      instructor: 'Yitzhak Goldberg',
      numberOfSessions: 12,
      startDate: '2026-06-05',
      price: 480,
      day: 'חמישי',
      time: '17:00 - 18:00'
    }
  ];

}

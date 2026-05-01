import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  selector: 'app-single-class',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-class.component.html',
  styleUrl: './single-class.component.css'
})
export class SingleClassComponent {
  @Input() classData!: Class;
}

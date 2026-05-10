import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrantService } from '../registrant.service';

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

  isClassStarted(): boolean {
    return new Date(this.classData.startDate) <= new Date();
  }
  constructor(public registrantService: RegistrantService) {}
countByClass(name: string): number {
  return this.registrantService.getCountByClass(name);
}
// count = 0;

// ngOnInit() {
//   this.count = this.registrantService.getCountByClass(this.classData.name);
// }
}

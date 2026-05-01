import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { RegisteredStudentsComponent } from './registered-students/registered-students.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'classes', component: ClassesListComponent },
  { path: 'registered-students', component: RegisteredStudentsComponent }
];


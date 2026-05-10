import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { RegisteredStudentsComponent } from './registered-students/registered-students.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'classes', component: ClassesListComponent, canActivate: [authGuard], data: { roles: ['Gymnastics Coach'] } },
  { path: 'registered-students', component: RegisteredStudentsComponent, canActivate: [authGuard], data: { roles: ['Registration Clerk'] } },
];


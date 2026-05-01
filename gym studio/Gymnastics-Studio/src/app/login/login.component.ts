import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UsersService } from '../users.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

interface User {
  userName: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatFormFieldModule, // זה המודול שאחראי על mat-error
    MatInputModule,
    MatButtonModule,
    MatCardModule, MatFormFieldModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
}) 

export class LoginComponent {

  userList: User[];
  isExists: boolean = true;
  name: string = '';
  password: string = '';
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('^[0-9]*$')])
  });
  constructor(private userService: UsersService, private router: Router) {
    this.userList = this.userService.getUserDetailes();
  }

  onPasswordInput(): void {
    const passwordControl = this.loginForm.get('password');
    if (passwordControl?.value) {
      passwordControl.updateValueAndValidity();
    }
  }

  onSubmit() {
    this.name = this.loginForm.get('userName')?.value || '';
    this.password = this.loginForm.get('password')?.value || '';

    const foundUser = this.userList.find((user: User) => 
      user.userName.toLowerCase() === this.name.toLowerCase() && user.password === this.password
    );

    if (foundUser) {
      this.isExists = true;
      if (foundUser.role === 'Gymnastics Coach') {
        this.router.navigate(['/classes']);
      } else if (foundUser.role === 'Registration Clerk') {
        this.router.navigate(['/registered-students']);
      }
    } else {
      this.isExists = false;
    }
  }
}

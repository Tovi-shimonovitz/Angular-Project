import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  userDetailes = [{
    "userName": "Chaim Levi",
    "password": "123456",
    "role": "Gymnastics Coach"
  },
  {
    "userName": "Mordechai Cohen",
    "password": "123457",
    "role": "Gymnastics Coach"
  },
  {
    "userName": "Yosef Mizrahi",
    "password": "123458",
    "role": "Gymnastics Coach"
  },
  {
    "userName": "David Shalom",
    "password": "123459",
    "role": "Registration Clerk"
  },
  {
    "userName": "Shimon Ben-David",
    "password": "123450",
    "role": "Registration Clerk"
  },
    {
    "userName": "Yitzhak Goldberg",
    "password": "123451",
    "role": "Gymnastics Coach"
    }
  ]

  getUserDetailes() {
    return this.userDetailes;
  }
}

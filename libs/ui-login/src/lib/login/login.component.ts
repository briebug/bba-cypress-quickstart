import { Component, OnInit } from '@angular/core';
import { Login } from '@bba/api-interfaces';

export const filters = [
  'ig-xpro2',
  'ig-willow',
  'ig-walden',
  'ig-valencia',
  'ig-toaster',
  'ig-sutro',
  'ig-sierra',
  'ig-rise',
  'ig-nashville',
  'ig-mayfair',
  'ig-lofi',
  'ig-kelvin',
  'ig-inkwell',
  'ig-hudson',
  'ig-hefe',
  'ig-earlybird',
  'ig-brannan',
  'ig-amaro',
  'ig-1977',
];

@Component({
  selector: 'bba-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginInfo: Login = {
    email: '',
    password: '',
  };

  chosenFilter = filters[Math.floor(Math.random() * filters.length)];

  constructor() {}

  ngOnInit(): void {}

  login(loginInfo: Login) {
    // Handle auth event
  }
}

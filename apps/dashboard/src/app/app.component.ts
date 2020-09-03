import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

export enum SidenavStatus {
  OPENED = 'opened',
  DISABLED = 'disabled',
  CLOSED = 'closed',
}

@Component({
  selector: 'bba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Reactive Application';
  links = [
    { path: '/', icon: 'home', title: 'home' },
    { path: '/courses', icon: 'view_list', title: 'courses' },
    { path: '/lessons', icon: 'assignment', title: 'lessons' },
    { path: '/users', icon: 'account_circle', title: 'users' },
  ];

  isAuthenticated$: Observable<boolean> = of(true);
  sidenavStatus = SidenavStatus.OPENED;

  constructor(private router: Router) {}

  logout() {
    this.router.navigateByUrl('login');
  }

  toggleSidenav() {
    this.sidenavStatus =
      this.sidenavStatus === SidenavStatus.OPENED
        ? SidenavStatus.CLOSED
        : SidenavStatus.OPENED;
  }
}

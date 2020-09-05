import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@bba/api-interfaces';

@Component({
  selector: 'bba-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  currentUser: User;
  originalTitle = '';
  @Input() set user(value: User) {
    if(value) this.originalTitle = `${value.firstName} ${value.lastName}`;
    this.currentUser = {...value};
  };
  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
}

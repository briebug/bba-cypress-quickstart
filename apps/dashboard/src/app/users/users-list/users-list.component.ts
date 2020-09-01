import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '@bba/api-interfaces';

@Component({
  selector: 'bba-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input() users: User[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}

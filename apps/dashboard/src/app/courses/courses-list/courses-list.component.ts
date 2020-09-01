import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Course } from '@bba/api-interfaces';

@Component({
  selector: 'bba-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  @Input() courses: Course[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}

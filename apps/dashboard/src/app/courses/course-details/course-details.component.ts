import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@bba/api-interfaces';

@Component({
  selector: 'bba-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {
  currentCourse: Course;
  originalTitle = '';
  @Input() set course(value: Course) {
    if(value) this.originalTitle = value.title;
    this.currentCourse = {...value};
  };
  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
}

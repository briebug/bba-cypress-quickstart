import { Component, OnInit } from '@angular/core';
import { CoursesFacade, LessonsFacade } from '@bba/core-state';

@Component({
  selector: 'bba-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courseLesons$ = this.coursesFacade.courseLessons$;

  constructor(
    private coursesFacade: CoursesFacade,
    private lessonsFacade: LessonsFacade
  ) {}

  ngOnInit(): void {
    this.coursesFacade.loadCourses();
    this.lessonsFacade.loadLessons();
  }
}

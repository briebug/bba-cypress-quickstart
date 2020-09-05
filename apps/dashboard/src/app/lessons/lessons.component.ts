import { Component, OnInit } from '@angular/core';
import { Course, Lesson } from '@bba/api-interfaces';
import { CoursesFacade, LessonsFacade } from '@bba/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'bba-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  courses$: Observable<Course[]> = this.coursesFacade.allCourses$;
  lessons$: Observable<Lesson[]> = this.lessonsFacade.allLessons$;
  selectedLesson$: Observable<Lesson> = this.lessonsFacade.selectedLesson$;

  constructor(
    private lessonsFacade: LessonsFacade,
    private coursesFacade: CoursesFacade
  ) {}

  ngOnInit(): void {
    this.reset();
    this.lessonsFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadLessons();
    this.loadCourses();
    this.lessonsFacade.selectLesson(null);
  }

  resetForm() {
    this.lessonsFacade.selectLesson(null);
  }

  loadLessons() {
    this.lessonsFacade.loadLessons();
  }

  loadCourses() {
    this.coursesFacade.loadCourses();
  }

  selectLesson(lesson: Lesson) {
    this.lessonsFacade.selectLesson(lesson.id);
  }

  saveLesson(lesson: Lesson) {
    if (lesson.id) {
      this.lessonsFacade.updateLesson(lesson);
    } else {
      this.lessonsFacade.createLesson(lesson);
    }
  }

  deleteLesson(lesson: Lesson) {
    this.lessonsFacade.deleteLesson(lesson);
  }
}

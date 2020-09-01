import { Injectable } from '@angular/core';
import { Course } from '@bba/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as CoursesActions from './courses.actions';
import * as CoursesSelectors from './courses.selectors';
import { getCourseLessons } from '../index';

@Injectable({
  providedIn: 'root'
})
export class CoursesFacade {
  loaded$ = this.store.pipe(select(CoursesSelectors.getCoursesLoaded));
  allCourses$ = this.store.pipe(select(CoursesSelectors.getAllCourses));
  selectedCourse$ = this.store.pipe(select(CoursesSelectors.getSelectedCourse));
  courseLessons$ = this.store.pipe(select(getCourseLessons));

  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
      action.type === CoursesActions.createCourse({} as any).type ||
      action.type === CoursesActions.updateCourse({} as any).type ||
      action.type === CoursesActions.deleteCourse({} as any).type
    )
  );

  constructor(private store: Store, private actions$: ActionsSubject) { }

  selectCourse(selectedId: string) {
    this.dispatch(CoursesActions.selectCourse({ selectedId }));
  }

  loadCourses() {
    this.dispatch(CoursesActions.loadCourses());
  }

  loadCourse(courseId: string) {
    this.dispatch(CoursesActions.loadCourse({ courseId }));
  }

  createCourse(course: Course) {
    this.dispatch(CoursesActions.createCourse({ course }));
  }

  updateCourse(course: Course) {
    this.dispatch(CoursesActions.updateCourse({ course }));
  }

  deleteCourse(course: Course) {
    this.dispatch(CoursesActions.deleteCourse({ course }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}

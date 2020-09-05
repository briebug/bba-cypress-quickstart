export const state = {
  route: '/',
};

export const getCourseCards = () => cy.get('[data-cy=home-course-cards]');

export const getCourses = () => cy.get('[data-cy=home-course-cards]>mat-card');

export const getCourseCardTitle = (course) => cy.get(`[data-cy=home-course-${course.id}-title]`);

export const getCourseCardLessons = (course) => cy.get(`[data-cy=home-course-${course.id}-title]`);

export const getCourseCardLessonItem = (lesson) => cy.get(`[data-cy=lesson=${lesson.id}-item]`);

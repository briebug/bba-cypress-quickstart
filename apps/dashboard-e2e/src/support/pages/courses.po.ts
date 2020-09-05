export const state = {
  route: '/courses',
  newMockCourse: {
    id: 'E2E_COURSE_ID',
    title: 'E2E Mock Course',
    description: 'E2E Mock Description',
  },
  updatedMockCourse: {
    id: 'E2E_COURSE_ID',
    title: 'E2E Mock Course!!',
    description: 'E2E Mock Description Updated',
  }
};

export const getCoursesList = () => cy.get('[data-cy=courses-list]');

export const getCourses = () => cy.get('[data-cy=courses-list]>mat-list-item');

export const getCourseItem = (course) => cy.get(`[data-cy=course-${course.id}-item]`);

export const getCourseTitle = (course) => cy.get(`[data-cy=course-${course.id}-item-title]`);

export const getCourseDeleteBtn = (course) => cy.get(`[data-cy=delete-course-${course.id}-btn]`);

export const selectCourse = (course) => getCourseItem(course).click();

export const getCourseDetailsTitle = () => cy.get('[data-cy=course-details-title]');

export const clearForm = () => cy.get('[data-cy=course-form-cancel').click();

export const completeNewCourseForm = (course) => {
  cy.get(`[data-cy=course-form-title]`).type(course.title, { delay: 20});
  cy.get(`[data-cy=course-form-description]`).type(course.description, { delay: 20});
  cy.get('[data-cy=course-form-save]').click();
};

export const completeUpdateCourseForm = (course) => {
  cy.get(`[data-cy=course-form-title]`).clear().type(`${course.title}!!`, { delay: 20});
  cy.get(`[data-cy=course-form-description]`).clear().type(`${course.description} updated`, { delay: 20});
  cy.get('[data-cy=course-form-save]').click();
};

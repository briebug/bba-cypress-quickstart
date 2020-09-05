import {
  clearForm,
  completeNewCourseForm,
  completeUpdateCourseForm,
  getCourseDeleteBtn,
  getCourseDetailsTitle,
  getCourseItem,
  getCourses,
  selectCourse,
  state,
} from '../../support/pages/courses.po';

describe('Courses', () => {
  const model = 'courses';
  let courses = null;

  before(() => {
    cy.fixture('courses').then((json) => (courses = json));
    cy.loadData(['courses']);
    cy.visit(state.route);
  });

  it('should be on the courses page', () => {
    cy.checkLocation(state.route);
  });

  it('should list all courses', () => {
    getCourses().should('have.length', courses.length);
  });

  it('should create a course', () => {
    cy.createEntity(model, state.newMockCourse);
    completeNewCourseForm(state.newMockCourse);
    getCourseItem(state.newMockCourse).should('exist');
  });

  it('should display a selected course details', () => {
    clearForm();
    selectCourse(state.newMockCourse);
    getCourseDetailsTitle().should('contain.text', `Editing ${state.newMockCourse.title}`);
  });

  it('should clear course details the form on cancel', () => {
    selectCourse(state.newMockCourse);
    clearForm();
    getCourseDetailsTitle().should('contain.text', `Select Course`);
  });

  it('should update a course', () => {
    cy.updateEntity(model, state.updatedMockCourse);
    selectCourse(state.updatedMockCourse);
    completeUpdateCourseForm(state.updatedMockCourse);
    getCourseItem(state.updatedMockCourse).should('exist');
  });

  it('should delete a course', () => {
    cy.deleteEntity(model, state.updatedMockCourse);
    getCourseDeleteBtn(state.updatedMockCourse).click();
    getCourseItem(state.updatedMockCourse).should('not.exist');
    getCourses().should('have.length', courses.length);
  });
});

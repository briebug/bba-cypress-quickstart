import {
  state
} from '../../support/pages/courses.po';

describe('Courses', () => {
  beforeEach(() => {
    cy.loadData();
    cy.visit(state.route);
  });

  it('should be on the courses page', () => {
    cy.checkLocation(state.route);
  });

  describe('Courses List', () => {

  });

  describe('Course Details', () => {

  });
});

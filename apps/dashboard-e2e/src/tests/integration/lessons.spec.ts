import {
  state
} from '../../support/pages/lessons.po';

describe('Lessons', () => {
  beforeEach(() => {
    cy.loadData(['courses', 'lessons']);
    cy.visit(state.route);
  });

  it('should be on the lessons page', () => {
    cy.checkLocation(state.route);
  });

  describe('Lessons List', () => {

  });

  describe('Lesson Details', () => {

  });
});

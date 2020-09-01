import { getNavItem, checkLocation } from '../support/app.po';

describe('dashboard', () => {
  beforeEach(() => cy.visit('/'));

  describe('should display app components', () => {
    it('should have toolbar', () => {
      cy.get('[data-cy=toolbar]').contains('Reactive Application');
    });

    it('should have bba-home', () => {
      cy.get('[data-cy=home-card]').should('have.length.greaterThan', 0);
    });

    it('should have menu 4 items', () => {
      cy.get('[data-cy=nav-link]').should('have.length', 4);
    });

    describe('should navigate to', () => {
      it('Home', () => {
        getNavItem(0).click();
        checkLocation('/');
      });

      it('Courses', () => {
        getNavItem(1).click();
        checkLocation('/courses');
      });

      it('Lessons', () => {
        getNavItem(2).click();
        checkLocation('/lessons');
      });

      it('Users', () => {
        getNavItem(3).click();
        checkLocation('/users');
      });
    });
  });
});

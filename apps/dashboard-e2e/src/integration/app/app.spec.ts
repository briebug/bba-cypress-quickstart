import {
  checkLocation,
  getLoginBtn,
  getNavItem,
  getNavList,
  getSideNav,
  getTitle,
  getToggleBtn,
  state,
} from '../../support/pages/app.po';

describe('Dashboard', () => {
  beforeEach(() => {
    cy.server();
    cy.route('GET', 'http://localhost:3000/courses', 'fixture:courses');
    cy.route('GET', 'http://localhost:3000/lessons', 'fixture:lessons');
    cy.route('GET', 'http://localhost:3000/users', 'fixture:users');
  });

  beforeEach(() => {
    cy.visit('/');
  });

  describe('Header', () => {
    it('should display the toggle button', () => {
      getToggleBtn().should('exist');
    });

    it('should hide the side navigation panel on togglge click', () => {
      getToggleBtn().click();
      getSideNav().should('not.be.visible');

      getToggleBtn().click();
      getSideNav().should('be.visible');
    });


    it('should display the login button', () => {
      getLoginBtn().should('exist');
    });

    it('should navigate to the login page on login button click', () => {
      getLoginBtn().click();
      checkLocation(state.loginRoute);
    });

    it('should display the correct title', () => {
      getTitle().should('contain', state.title);
    });
  });

  describe('Side Nav', () => {
    it('should display the side navigation', () => {
      getSideNav().should('exist');
    });

    it('should display all menu items', () => {
      getNavList().should('have.length', state.links.length);
    });

    it('should properly navigate on click', () => {
      state.links.forEach((link) => {
        getNavItem(link.title).click();
        checkLocation(link.path);
      });
    });
  });
});

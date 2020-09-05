import {
  gotoLoginScreen,
  loginAs,
  state,
} from '../../support/pages/login.po';

import { getLoginBtn, getSideNav} from '../../support/pages/app.po';

describe('Login', () => {
  let users = null;

  before(() => {
    cy.loadData(['courses', 'lessons']);
    cy.fixture('users').then((json) => (users = json));
  });

  beforeEach(() => {
    cy.logout();
    gotoLoginScreen();
  });

  it('should be on the login page', () => {
    cy.checkLocation(state.route);
  });

  it('should allow login as an admin', () => {
    const loggedInUser = users.find(user => user.role === 'admin');
    loginAs(loggedInUser);
    cy.checkLocation(state.homeRoute);
  });

  it('should allow login as a manager', () => {
    const loggedInUser = users.find(user => user.role === 'manager');
    loginAs(loggedInUser);
    cy.checkLocation(state.homeRoute);
  });

  it('should allow login as an user', () => {
    const loggedInUser = users.find(user => user.role === 'user');
    loginAs(loggedInUser);
    cy.checkLocation(state.homeRoute);
  });

  it('it should allow logout', () => {
    const loggedInUser = users.find(user => user.role === 'user');
    loginAs(loggedInUser);
    getLoginBtn().click();

    cy.checkLocation(state.route);
    getLoginBtn().should('not.be.visible');
    getSideNav().should('not.be.visible');
  });
});

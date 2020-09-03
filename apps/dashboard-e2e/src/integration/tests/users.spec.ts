import {
  state
} from '../../support/pages/users.po';

describe('Users', () => {
  beforeEach(() => {
    cy.loadData();
    cy.visit(state.route);
  });

  it('should be on the users page', () => {
    cy.checkLocation(state.route);
  });

  describe('Users List', () => {

  });

  describe('User Details', () => {

  });
});

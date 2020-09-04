export const state = {
  route: '/login'
};

export const gotoLoginScreen = () => cy.visit(state.route);

export const loginAs = (user) => {
  cy.login(user.email, user.password);
  cy.loadData();

  cy.get('[data-cy=login-email]').type(user.email, { delay: 100 });
  cy.get('[data-cy=login-password]').type(user.password, { delay: 100 });
  cy.get('[data-cy=login-submit]').click();
}

export const logout = () => cy.get('[data-cy=logout]').click();

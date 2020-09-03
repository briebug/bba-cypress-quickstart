// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    login(email: string, password: string): void;
    loadData(): void;
    checkLocation(path: string): void;
  }
}

Cypress.Commands.add('loadData', () => {
  cy.server();
  cy.route('GET', 'http://localhost:3000/courses', 'fixture:courses');
  cy.route('GET', 'http://localhost:3000/lessons', 'fixture:lessons');
  cy.route('GET', 'http://localhost:3000/users', 'fixture:users');
});

Cypress.Commands.add('checkLocation', (route) => {
  cy.location().should((loc) => expect(loc.pathname).to.eq(route));
});

Cypress.Commands.add('login', (email, password) => {
  console.log('Custom command example: Login', email, password);
});

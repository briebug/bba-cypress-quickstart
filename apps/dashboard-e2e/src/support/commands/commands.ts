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

const jwt = require('jsonwebtoken');
const SECRET_KEY = '123456789';
const expiresIn = '1h';

// Create a token from a payload
const createToken = (payload) => jwt.sign(payload, SECRET_KEY, { expiresIn });

declare namespace Cypress {
  interface Chainable<Subject> {
    login(email: string, password: string): void;
    logout(): void;
    loadData(): void;
    checkLocation(path: string): void;
  }
}

Cypress.Commands.add('login', (email, password) => {
  const access_token = createToken({ email, password });
  cy.server();
  cy.route('POST', 'http://localhost:3000/auth/login', { access_token });
});

Cypress.Commands.add('logout', () => {
  localStorage.setItem('token', '');
});

Cypress.Commands.add('loadData', () => {
  cy.server();
  cy.route('GET', 'http://localhost:3000/courses', 'fixture:courses');
  cy.route('GET', 'http://localhost:3000/lessons', 'fixture:lessons');
  cy.route('GET', 'http://localhost:3000/users', 'fixture:users');
});

Cypress.Commands.add('checkLocation', (route) => {
  cy.location().should((loc) => expect(loc.pathname).to.eq(route));
});

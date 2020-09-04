import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
  cy.loadData();
  cy.visit('/');
});

Given(`I am on the home page`, () => {
  cy.checkLocation(`/`);
});

When('I navigate to the {string} page', (page) => {
  cy.visit(`/${page}`);
});

Then('I should see {string} in the URL', (route) => {
  cy.checkLocation(`/${route}`);
});

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { gotoLoginScreen, loginAs, logout } from '../../../support/pages/login.po';

let users = null;

beforeEach(() => {
  cy.logout();
  cy.fixture('users')
    .then((json) => users = json);
});

Given('I am on the login page', () => {
  gotoLoginScreen();
});

Given(/^I am logged in as an? "(\w+)"$/, (role) => {
  const loggedInUser = users.find(user => user.role === role);
  gotoLoginScreen();
  loginAs(loggedInUser);
});

When(/^I login as an? "(\w+)"$/, (role) => {
  const loggedInUser = users.find(user => user.role === role);
  loginAs(loggedInUser);
});

Then('I should be on the home page', () => {
  cy.checkLocation('/');
});

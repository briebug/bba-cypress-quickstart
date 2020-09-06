import { Before, Given, When } from 'cypress-cucumber-preprocessor/steps';
import { getLoginBtn } from '../../../support/pages/app.po';
import { gotoLoginScreen, loginAs } from '../../../support/pages/login.po';

let users = null;

Before(() => {
  cy.logout();
  cy.fixture('users')
    .then((json) => users = json);
});

Given('I am on the login page', () => gotoLoginScreen());

Given(/^I am logged in as an? "(\w+)"$/, (role) => {
  const loggedInUser = users.find(user => user.role === role);
  gotoLoginScreen();
  loginAs(loggedInUser);
});

When('I log out', () => getLoginBtn().click());

When(/^I login as an? "(\w+)"$/, (role) => {
  const loggedInUser = users.find(user => user.role === role);
  loginAs(loggedInUser);
});

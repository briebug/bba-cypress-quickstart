import { Before, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import {
  clearForm,
  createUser,
  deleteUser,
  getUserDetailsTitle,
  getUserItem,
  getUsers,
  selectUser,
  state,
  updateUser,
} from '../../../support/pages/users.po';

const model = 'users';
let users = null;

Before(() => {
  cy.fixture('users').then((json) => (users = json));
  cy.loadData(['courses', 'users']);
  cy.visit(state.homeRoute);
});

Given(`I am on the home page`, () => cy.checkLocation(state.homeRoute));

Given(`I am on the {string} page`, (page) => cy.visit(`/${page}`));

When('I navigate to the {string} page', (page) => cy.visit(`/${page}`));

When('I have just created a new user', () => createUser(model, state.newMockUser));

When('I update the user', () => updateUser(model, state.updatedMockUser))

When('I delete the new user', () => deleteUser(model, state.newMockUser));

When('I select the new user', () => {
  clearForm();
  selectUser(state.newMockUser);
});

When('I select the updated user', () => {
  clearForm();
  selectUser(state.updatedMockUser);
});

When('I click on the cancel button', () => clearForm());

Then('I should see the details form reset', () =>
  getUserDetailsTitle().should('contain.text', `Select User`)
);

Then('I should see {string} in the URL', (route) => {
  cy.checkLocation(`/${route}`);
});

Then('I should see users in the users list', () => {
  getUsers().should('have.length', users.length);
});

Then('I should see that user in the users list', () => {
  getUserItem(state.newMockUser).should('exist');
});

Then('I should see the new user details', () => {
  getUserDetailsTitle().should('contain.text', `Editing ${state.newMockUser.firstName} ${state.newMockUser.lastName}`);
});

Then('I should see the updated user details', () => {
  getUserDetailsTitle().should('contain.text', `Editing ${state.updatedMockUser.firstName} ${state.updatedMockUser.lastName}`);
});

Then('I should not see the new user in the list', () => {
  getUserItem(state.updatedMockUser).should('not.exist');
  getUsers().should('have.length', users.length);
});

import { Before, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import {
  clearForm,
  createLesson,
  deleteLesson,
  getLessonDetailsTitle,
  getLessonItem,
  getLessons,
  selectLesson,
  state,
  updateLesson,
} from '../../../support/pages/lessons.po';

const model = 'lessons';
let lessons = null;

Before(() => {
  cy.fixture('lessons').then((json) => (lessons = json));
  cy.loadData(['courses', 'lessons']);
  cy.visit(state.homeRoute);
});

Given(`I am on the home page`, () => cy.checkLocation(state.homeRoute));

Given(`I am on the {string} page`, (page) => cy.visit(`/${page}`));

When('I navigate to the {string} page', (page) => cy.visit(`/${page}`));

When('I have just created a new lesson', () => createLesson(model, state.newMockLesson));

When('I update the lesson', () => updateLesson(model, state.updatedMockLesson))

When('I delete the new lesson', () => deleteLesson(model, state.newMockLesson));

When('I select the new lesson', () => {
  clearForm();
  selectLesson(state.newMockLesson);
});

When('I select the updated lesson', () => {
  clearForm();
  selectLesson(state.updatedMockLesson);
});

When('I click on the cancel button', () => clearForm());

Then('I should see the details form reset', () =>
  getLessonDetailsTitle().should('contain.text', `Select Lesson`)
);

Then('I should see {string} in the URL', (route) => {
  cy.checkLocation(`/${route}`);
});

Then('I should see lessons in the lessons list', () => {
  getLessons().should('have.length', lessons.length);
});

Then('I should see that lesson in the lessons list', () => {
  getLessonItem(state.newMockLesson).should('exist');
});

Then('I should see the new lesson details', () => {
  getLessonDetailsTitle().should('contain.text', `Editing ${state.newMockLesson.title}`);
});

Then('I should see the updated lesson details', () => {
  getLessonDetailsTitle().should('contain.text', `Editing ${state.updatedMockLesson.title}`);
});

Then('I should not see the new lesson in the list', () => {
  getLessonItem(state.updatedMockLesson).should('not.exist');
  getLessons().should('have.length', lessons.length);
});

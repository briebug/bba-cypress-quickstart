import { Before, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import {
  clearForm,
  createCourse,
  deleteCourse,
  getCourseDetailsTitle,
  getCourseItem,
  getCourses,
  selectCourse,
  state,
  updateCourse,
} from '../../../support/pages/courses.po';

const model = 'courses';
let courses = null;

Before(() => {
  cy.fixture('courses').then((json) => (courses = json));
  cy.loadData(['courses', 'lessons']);
  cy.visit(state.homeRoute);
});

Given(`I am on the home page`, () => cy.checkLocation(state.homeRoute));

Given(`I am on the {string} page`, (page) => cy.visit(`/${page}`));

When('I navigate to the {string} page', (page) => cy.visit(`/${page}`));

When('I have just created a new course', () => createCourse(model, state.newMockCourse));

When('I update the course', () => updateCourse(model, state.updatedMockCourse))

When('I delete the new course', () => deleteCourse(model, state.newMockCourse));

When('I select the new course', () => {
  clearForm();
  selectCourse(state.newMockCourse);
});

When('I select the updated course', () => {
  clearForm();
  selectCourse(state.updatedMockCourse);
});

When('I click on the cancel button', () => clearForm());

Then('I should see the details form reset', () =>
  getCourseDetailsTitle().should('contain.text', `Select Course`)
);

Then('I should see {string} in the URL', (route) => {
  cy.checkLocation(`/${route}`);
});

Then('I should see courses in the courses list', () => {
  getCourses().should('have.length', courses.length);
});

Then('I should see that course in the courses list', () => {
  getCourseItem(state.newMockCourse).should('exist');
});

Then('I should see the new course details', () => {
  getCourseDetailsTitle().should('contain.text', `Editing ${state.newMockCourse.title}`);
});

Then('I should see the updated course details', () => {
  getCourseDetailsTitle().should('contain.text', `Editing ${state.updatedMockCourse.title}`);
});

Then('I should not see the new course in the list', () => {
  getCourseItem(state.updatedMockCourse).should('not.exist');
  getCourses().should('have.length', courses.length);
});

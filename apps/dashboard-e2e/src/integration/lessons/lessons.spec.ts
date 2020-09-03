import {
  state
} from '../../support/pages/lessons.po';

describe('Lessons', () => {
  beforeEach(() => {
    cy.loadData();
    cy.visit(state.route);
  });

  it('should be on the lessons page', () => {
    cy.checkLocation(state.route);
  });

  describe('Lessons List', () => {

  });

  describe('Lesson Details', () => {

  });
});

// import {
//   getForm,
//   fillForm,
//   checkFormEmpty,
//   getListItem,
//   cancelForm,
//   saveForm,
//   checkFormInputHas,
//   checkListItemHas,
// } from '../support/app.po';

// describe('lessons', () => {
//   const mockText = 'lessons e2e';
//   const defaultText = 'This is an Angular Lesson';

//   beforeEach(() => cy.visit('/lessons'));

//   it('should clear form on cancel', () => {
//     fillForm(mockText);

//     cancelForm();

//     checkFormEmpty();
//   });

//   it('should select a lesson and show related data', () => {
//     getListItem(':first').click();

//     checkFormInputHas(defaultText);
//   });

//   it('should create new item, then delete when done', () => {
//     fillForm(mockText);

//     saveForm();

//     cy.reload();

//     checkListItemHas('last', mockText);
//     getListItem(':last').click();
//     checkFormInputHas(mockText);

//     // Clears saved item, waits to ensure smooth operation
//     cy.wait(500);
//     getListItem(':last button').click();
//   });

//   it('should update existing item, reset when done', () => {
//     getListItem(':first').click();

//     getForm().within(($form) => cy.get('input:last').type(`${mockText}`));
//     saveForm();

//     cy.reload();

//     getListItem(':first').click();
//     checkFormInputHas(`${defaultText}${mockText}`);

//     // Clears edit to remove changes
//     getForm().within(($form) =>
//       cy.get('input:last').clear().type(`${defaultText}`)
//     );
//     saveForm();
//   });
// });

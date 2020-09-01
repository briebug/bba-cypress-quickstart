import {
  getForm,
  fillForm,
  checkFormEmpty,
  getListItem,
  cancelForm,
  saveForm,
  checkFormInputHas,
  checkListItemHas,
} from '../support/app.po';

describe('courses', () => {
  const mockText = 'courses e2e';
  const defaultText = 'This is an Angular Course';

  beforeEach(() => cy.visit('/courses'));

  it('should clear form on cancel', () => {
    fillForm(mockText);

    cancelForm();

    checkFormEmpty();
  });

  it('should select a course and show related data', () => {
    getListItem(':first').click();

    checkFormInputHas(defaultText);
  });

  it('should create new item, then delete when done', () => {
    fillForm(mockText);

    saveForm();

    cy.reload();

    checkListItemHas('last', mockText);
    getListItem(':last').click();
    checkFormInputHas(mockText);

    // Clears saved item, waits to ensure smooth operation
    cy.wait(500);
    getListItem(':last button').click();
  });

  it('should update existing item, reset when done', () => {
    getListItem(':first').click();

    getForm().within(($form) => cy.get('input:last').type(`${mockText}`));
    saveForm();

    cy.reload();

    getListItem(':first').click();
    checkFormInputHas(`${defaultText}${mockText}`);

    // Clears edit to remove changes
    getForm().within(($form) =>
      cy.get('input:last').clear().type(`${defaultText}`)
    );
    saveForm();
  });
});

// Root/App Component Commands
export const getNavItem = (index) => cy.get('[data-cy=nav-link]').eq(index);

export const checkLocation = (route) =>
  cy.location().should((loc) => expect(loc.pathname).to.eq(route));

// Home Commands

// List Commands
export const getListItem = (inner) => cy.get(`[data-cy=list-item]${inner}`);

export const checkListItemHas = (cypIndex, value) =>
  cy.get(`[data-cy=item-title]:${cypIndex}`).should('have.text', value);

// Form Commands
export const getForm = () => cy.get(`[data-cy=form]`);

export const saveForm = () => cy.get('[data-cy=save]').click();

export const cancelForm = () => cy.get('[data-cy=cancel]').click();

export const fillForm = (info) =>
  getForm().within(($form) =>
    cy.get('input').each((element) => cy.wrap(element).type(`${info}`))
  );

export const checkFormEmpty = () =>
  getForm().within(($form) =>
    cy.get('input').each((element) => cy.wrap(element).should('be.empty'))
  );

export const checkFormInputHas = (value) =>
  getForm().within(($form) => cy.get('input:last').should('have.value', value));

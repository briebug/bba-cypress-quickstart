describe('HomeComponent', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should have 2 courses', () => {
        cy.get('[data-cy=home-card]').should('have.length', 2);
    });
  
    it('should have 2 lessons', () => {
        cy.get('[data-cy=list-item]').should('have.length',4);
    });
})
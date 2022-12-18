describe('Making page', () => {
    beforeEach(() => {
        cy.visit('/making');
    });

    it('should render intro', () => {
        cy.get('[data-testid="making-intro"]').should('be.visible');
    });

    it('should render at least 3 projects', () => {
        cy.get('[data-testid="making-project"]').its('length').should('be.at.least', 3);
    });
});

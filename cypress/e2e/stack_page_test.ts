describe('Stack page', () => {
    beforeEach(() => {
        cy.visit('/stack');
    });

    it('should render intro', () => {
        cy.get('[data-testid="stack-intro"]').should('be.visible');
    });

    it('should render at least 3 stack items', () => {
        cy.get('[data-testid="stack-item"]').its('length').should('be.at.least', 3);
    });
});

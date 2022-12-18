describe('Traveling page', () => {
    beforeEach(() => {
        cy.visit('/traveling');
    });

    it('should render intro', () => {
        cy.get('[data-testid="traveling-intro"]').should('be.visible');
    });

    it('should render at least 3 projects', () => {
        cy.get('[data-testid="photo-card"]').its('length').should('be.at.least', 3);
    });
});

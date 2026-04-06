describe('Now page', () => {
    beforeEach(() => {
        cy.visit('/now');
    });

    it('should render the page header', () => {
        cy.get('h1').contains('Now').should('be.visible');
    });

    it('should render at least one collapsible entry', () => {
        cy.get('[data-testid="now-entry"]').should('have.length.greaterThan', 0);
    });

    it('should always show the most recent entry content', () => {
        cy.get('[data-testid="now-entry"]')
            .first()
            .within(() => {
                cy.get('[data-testid="now-entry-content"]').should('be.visible');
            });
    });
});

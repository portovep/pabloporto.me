describe('Working page', () => {
    beforeEach(() => {
        cy.visit('/working');
    });

    it('should render intro', () => {
        cy.get('[data-testid="working-intro"]').should('be.visible');
    });

    it('should render at least 3 projects', () => {
        cy.get('[data-testid="project-summary"]').its('length').should('be.at.least', 3);
    });

    it.skip('should expand project item', () => {
        cy.get('[data-testid="project-summary"]').first().click();
        //TODO
    });
});

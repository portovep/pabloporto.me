describe('About page', () => {
    before(() => {
        cy.visit('/about');
    });

    it('should render intro', () => {
        cy.get('[data-testid="about-intro"]').should('be.visible');
    });
});

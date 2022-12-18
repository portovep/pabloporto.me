describe('Home page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should render intro', () => {
        cy.get('[data-testid="home-intro"]').should('be.visible');
    });

    it('should render navbar', () => {
        cy.get('[data-testid="navbar"]').should('be.visible');
    });

    it('should render footer', () => {
        cy.get('[data-testid="footer"]').should('be.visible');
    });
});

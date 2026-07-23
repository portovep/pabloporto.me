describe('Uses page', () => {
    beforeEach(() => {
        cy.visit('/uses');
    });

    it('should render the page header', () => {
        cy.get('h1').contains('Uses').should('be.visible');
    });

    it('should render several sections', () => {
        cy.get('[data-testid="uses-intro"] h2').should('have.length.greaterThan', 2);
    });

    it('should render items with external links', () => {
        cy.get('[data-testid="uses-intro"] td').should('have.length.greaterThan', 10);
        cy.get('[data-testid="uses-intro"] td a[target="_blank"]').should(
            'have.length.greaterThan',
            5
        );
    });
});

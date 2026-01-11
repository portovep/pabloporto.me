describe('Reading page', () => {
    beforeEach(() => {
        cy.visit('/reading');
    });

    it('should render intro', () => {
        cy.get('[data-testid="reading-intro"]').should('be.visible');
        cy.contains('Reading').should('be.visible');
        cy.contains('My book collection and reading lists').should('be.visible');
    });

    it('should render at least one shelf', () => {
        cy.get('[data-testid="shelf"]').its('length').should('be.at.least', 1);
    });

    it('should display shelf information correctly', () => {
        cy.get('[data-testid="shelf"]')
            .first()
            .within(() => {
                cy.get('h2').should('be.visible');
            });
    });

    it('should render at least 3 book cards', () => {
        cy.get('[data-testid="book-card"]').its('length').should('be.at.least', 3);
    });

    it('should display book information correctly', () => {
        cy.get('[data-testid="book-card"]')
            .first()
            .within(() => {
                cy.get('h3').should('be.visible');
            });
    });

    it('should have external links to literal.club for books', () => {
        cy.get('[data-testid="book-card"]')
            .first()
            .parent()
            .should('have.attr', 'href')
            .and('include', 'literal.club');
    });
});

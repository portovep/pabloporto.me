describe('Speaking page', () => {
    beforeEach(() => {
        cy.visit('/speaking');
    });

    it('should render intro', () => {
        cy.get('[data-testid="speaking-intro"]').should('be.visible');
        cy.contains('Speaking').should('be.visible');
        cy.contains('I like to share and teach what I learn').should('be.visible');
    });

    it('should render at least 3 talk cards', () => {
        cy.get('[data-testid="talk-card"]').its('length').should('be.at.least', 3);
    });

    it('should display talk information correctly', () => {
        cy.get('[data-testid="talk-card"]')
            .first()
            .within(() => {
                cy.get('h3').should('be.visible');
                cy.contains('2023').should('be.visible');
            });
    });

    it('should have external links for talks with URLs', () => {
        cy.get('[data-testid="talk-card"]')
            .first()
            .parents('a')
            .should('have.attr', 'href')
            .and('include', 'youtube.com');
    });
});

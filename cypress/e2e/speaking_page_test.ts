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
                // Check for any year (talks are sorted by newest first, so could be 2025, 2024, etc.)
                cy.get('div').contains(/\d{4}/).should('be.visible');
            });
    });

    it('should have external links for talks with URLs', () => {
        // Find talk cards that are wrapped in a Link (have a URL)
        // The Link component wraps the Card, so we check if parent is an anchor
        cy.get('[data-testid="talk-card"]')
            .first()
            .then(($card) => {
                const $parent = $card.parent();
                if ($parent.is('a')) {
                    cy.wrap($parent)
                        .should('have.attr', 'href')
                        .and('match', /^https?:\/\//);
                } else {
                    // If no URL, that's also valid - not all talks have URLs
                    cy.log('First talk does not have a URL, which is valid');
                }
            });
    });
});

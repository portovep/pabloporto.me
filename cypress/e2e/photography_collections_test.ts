describe('Photography collections', () => {
    beforeEach(() => {
        // Stub Next image requests so blur placeholders don't slow window.load
        cy.intercept('GET', '/_next/image*', { statusCode: 200, body: '' });
        cy.visit('/traveling');
    });

    it('navigates from /traveling into a collection gallery', () => {
        cy.get('[data-testid="collection-card"]').first().click();
        cy.url().should('match', /\/photography\/[a-z-]+$/);
        cy.get('[data-testid="photography-gallery"]').should('be.visible');
        cy.get('[data-testid="gallery-photo"]').its('length').should('be.at.least', 1);
    });

    it('returns to /traveling via the back link', () => {
        cy.get('[data-testid="collection-card"]').first().click();
        cy.contains('a', 'Back to Traveling').click();
        cy.url().should('include', '/traveling');
        cy.get('[data-testid="traveling-intro"]').should('be.visible');
    });

    it('opens the lightbox on photo click and closes with Escape', () => {
        cy.get('[data-testid="collection-card"]').first().click(); // India — 4 photos
        cy.get('[data-testid="gallery-photo"]').first().click();
        cy.get('button[aria-label="Close"]').should('be.visible');
        cy.get('button[aria-label="Next photo"]').should('be.visible');
        cy.get('button[aria-label="Previous photo"]').should('be.visible');
        cy.get('body').type('{esc}');
        cy.get('button[aria-label="Close"]').should('not.exist');
    });

    it('hides prev/next chevrons in single-photo collections', () => {
        cy.visit('/photography/portugal');
        cy.get('[data-testid="gallery-photo"]').first().click();
        cy.get('button[aria-label="Close"]').should('be.visible');
        cy.get('button[aria-label="Next photo"]').should('not.exist');
        cy.get('button[aria-label="Previous photo"]').should('not.exist');
    });
});

describe('Traveling page', () => {
    beforeEach(() => {
        cy.visit('/traveling');
    });

    it('should show map with correct fill colors for visited, lived, and land countries', () => {
        cy.get('.world-map svg', { timeout: 10000 }).should('be.visible');
        cy.get('.world-map svg path[id]').should('have.length.at.least', 10);

        const getFill = (el: JQuery<HTMLElement>): string => window.getComputedStyle(el[0]).fill;

        // Visited countries: green #22cd88 → rgb(34, 205, 136)
        cy.get('.world-map svg path.visited')
            .should('have.length.at.least', 1)
            .first()
            .then(($path) => {
                const fill = getFill($path);
                expect(fill).to.match(/rgb\(34,\s*205,\s*136\)|#22cd88/i);
            });

        // Lived countries: black
        cy.get('.world-map svg path.lived')
            .should('have.length.at.least', 1)
            .first()
            .then(($path) => {
                const fill = getFill($path);
                expect(fill).to.match(/rgb\(0,\s*0,\s*0\)|#000(?:000)?/i);
            });

        // Land (not visited): gray #cccccc → rgb(204, 204, 204)
        cy.get('.world-map svg path.land')
            .should('have.length.at.least', 1)
            .first()
            .then(($path) => {
                const fill = getFill($path);
                expect(fill).to.match(/rgb\(204,\s*204,\s*204\)|#ccc(?:ccc)?/i);
            });
    });

    it('should render intro', () => {
        cy.get('[data-testid="traveling-intro"]').should('be.visible');
    });

    it('should render at least 3 photos', () => {
        cy.get('[data-testid="photo-card"]').its('length').should('be.at.least', 3);
    });
});

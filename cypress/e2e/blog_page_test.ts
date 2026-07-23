describe('Blog page', () => {
    beforeEach(() => {
        cy.visit('/blog');
    });

    it('should render intro', () => {
        cy.get('[data-testid="writing-intro"]').should('be.visible');
    });

    it('should render at least 3 posts', () => {
        cy.get('[data-testid="post-summary"]').its('length').should('be.at.least', 3);
    });

    it('should open blog post', () => {
        cy.get('[data-testid="post-summary"] a[href*="/blog/"]').first().click();
        cy.url().should('include', '/blog/');
        cy.get('article').should('be.visible');
    });

    it('should filter posts by tag', () => {
        cy.get('[data-testid="post-summary"]').its('length').as('unfilteredCount');
        cy.get('[data-testid="tag-filter-all"]').should('have.attr', 'data-selected', 'true');
        cy.get('[data-testid="filtered-count"]').should('not.be.visible');

        cy.get('[data-testid="tag-filter-work"]').click();
        cy.get('[data-testid="tag-filter-work"]').should('have.attr', 'data-selected', 'true');
        cy.get('[data-testid="tag-filter-all"]').should('have.attr', 'data-selected', 'false');
        cy.get('[data-testid="filtered-count"]').should('be.visible').and('contain', 'posts');
        cy.get('[data-testid="post-summary"]')
            .its('length')
            .then(function (filteredCount) {
                expect(filteredCount).to.be.lessThan(this.unfilteredCount);
            });

        cy.get('[data-testid="tag-filter-all"]').click();
        cy.get('[data-testid="tag-filter-work"]').should('have.attr', 'data-selected', 'false');
        cy.get('[data-testid="filtered-count"]').should('not.be.visible');
        cy.get('[data-testid="post-summary"]')
            .its('length')
            .then(function (restoredCount) {
                expect(restoredCount).to.equal(this.unfilteredCount);
            });
    });

    it('should render the newsletter CTA on a post', () => {
        cy.get('[data-testid="post-summary"] a[href*="/blog/"]').first().click();
        cy.get('[data-testid="newsletter-cta"]').should('be.visible');
        cy.get('[data-testid="newsletter-email"]').should('have.attr', 'name', 'email');
        cy.get('[data-testid="newsletter-cta"] form').should(
            'have.attr',
            'action',
            'https://pabsgarage.substack.com/subscribe'
        );
    });
});

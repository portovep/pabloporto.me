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
});

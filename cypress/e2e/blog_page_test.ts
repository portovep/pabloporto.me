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

    it.skip('should open blog post', () => {
        cy.get('[data-testid="post-summary"]').first().click();
        //TODO
    });
});

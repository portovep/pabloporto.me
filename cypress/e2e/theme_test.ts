const selectTheme = (theme: 'Light' | 'Dark' | 'System') => {
    cy.get('[data-testid="theme-toggle"]').click();
    cy.get('[role="menuitem"]').contains(theme).click();
};

describe('Theme switcher', () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.visit('/');
    });

    it('should default to light mode', () => {
        cy.get('html').should('have.class', 'light');
    });

    it('should switch to dark mode', () => {
        selectTheme('Dark');
        cy.get('html').should('have.class', 'dark');
    });

    it('should switch back to light mode', () => {
        selectTheme('Dark');
        cy.get('html').should('have.class', 'dark');

        selectTheme('Light');
        cy.get('html').should('have.class', 'light');
    });

    it('should persist dark mode after page reload', () => {
        selectTheme('Dark');
        cy.get('html').should('have.class', 'dark');

        cy.reload();
        cy.get('html').should('have.class', 'dark');
    });

    it('should persist light mode after page reload', () => {
        selectTheme('Dark');
        selectTheme('Light');

        cy.reload();
        cy.get('html').should('have.class', 'light');
    });
});

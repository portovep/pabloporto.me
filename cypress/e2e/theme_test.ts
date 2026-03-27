const selectTheme = (theme: 'Light' | 'Dark' | 'System') => {
    // ensure any previously open menu is fully unmounted before opening a new one
    cy.get('[role="menu"]').should('not.exist');
    cy.get('[data-testid="theme-toggle"]').click();
    cy.get('[role="menu"]').should('be.visible');
    cy.contains('[role="menuitem"]', theme).click();
    // wait for the portal to unmount before returning
    cy.get('[role="menu"]').should('not.exist');
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
        cy.get('html').should('have.class', 'dark');
        selectTheme('Light');

        cy.reload();
        cy.get('html').should('have.class', 'light');
    });
});

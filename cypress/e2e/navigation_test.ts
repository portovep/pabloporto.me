describe('Navigation functionality', () => {
    const navigationRoutes = [
        { name: 'Writing', path: '/blog', testId: 'writing' },
        { name: 'Reading', path: '/reading', testId: 'reading' },
        { name: 'Speaking', path: '/speaking', testId: 'speaking' },
        { name: 'Working', path: '/working', testId: 'working' },
        { name: 'Traveling', path: '/traveling', testId: 'traveling' },
        { name: 'Making', path: '/making', testId: 'making' }
    ];

    describe('Main page menu cards', () => {
        beforeEach(() => {
            cy.visit('/');
        });

        navigationRoutes.forEach((route) => {
            it(`should navigate to ${route.name} page from home card`, () => {
                cy.get(`[data-testid="home-card-${route.testId}"]`).within(() => {
                    cy.get('a').should('have.attr', 'href', route.path);
                    cy.get('a').click();
                });
                cy.url().should('include', route.path);
            });
        });
    });

    describe('Desktop menu', () => {
        beforeEach(() => {
            // Set viewport to desktop size
            cy.viewport(1280, 720);
            cy.visit('/');
        });

        it('should display desktop menu', () => {
            cy.get('[data-testid="desktop-menu"]').should('be.visible');
        });

        navigationRoutes.forEach((route) => {
            it(`should navigate to ${route.name} page from desktop menu`, () => {
                cy.get(`[data-testid="desktop-menu-${route.testId}"]`).should('be.visible').click();
                cy.url().should('include', route.path);
            });
        });

        it('should navigate to About page from desktop menu', () => {
            cy.get('[data-testid="desktop-menu-about"]').should('be.visible').click();
            cy.url().should('include', '/about');
        });
    });

    describe('Mobile menu', () => {
        beforeEach(() => {
            // Set viewport to mobile size
            cy.viewport(375, 667);
            cy.visit('/');
        });

        it('should toggle mobile menu', () => {
            cy.get('[data-testid="mobile-menu-toggle"]').should('be.visible');
            cy.get('[data-testid="mobile-menu"]').should('not.be.visible');
            cy.get('[data-testid="mobile-menu-toggle"]').click();
            cy.get('[data-testid="mobile-menu"]').should('be.visible');
            cy.get('[data-testid="mobile-menu-toggle"]').click();
            cy.get('[data-testid="mobile-menu"]').should('not.be.visible');
        });

        navigationRoutes.forEach((route) => {
            it(`should navigate to ${route.name} page from mobile menu`, () => {
                cy.get('[data-testid="mobile-menu-toggle"]').click();
                cy.get(`[data-testid="mobile-menu-${route.testId}"]`).should('be.visible').click();
                cy.url().should('include', route.path);
            });
        });

        it('should navigate to About page from mobile menu', () => {
            cy.get('[data-testid="mobile-menu-toggle"]').click();
            cy.get('[data-testid="mobile-menu-about"]').should('be.visible').click();
            cy.url().should('include', '/about');
        });

        it('should close mobile menu after navigation', () => {
            cy.get('[data-testid="mobile-menu-toggle"]').click();
            cy.get('[data-testid="mobile-menu-reading"]').click();
            cy.url().should('include', '/reading');
            // Menu should be closed after navigation
            cy.visit('/');
            cy.get('[data-testid="mobile-menu"]').should('not.be.visible');
        });
    });
});

describe('Working page', () => {
    beforeEach(() => {
        cy.visit('/working');
    });

    it('should render intro', () => {
        cy.get('[data-testid="working-intro"]').should('be.visible');
    });

    it('should render at least 3 projects', () => {
        cy.get('[data-testid="project-summary"]').its('length').should('be.at.least', 3);
    });

    it.skip('should expand project item', () => {
        cy.get('[data-testid="project-summary"]').first().click();
        //TODO
    });

    describe('Project filtering by role', () => {
        beforeEach(() => {
            cy.visit('/working');
        });

        it('should display role filter buttons', () => {
            cy.contains('Filter by role:').should('be.visible');
            cy.get('[data-testid^="role-filter-"]').should('have.length.at.least', 1);
        });

        it('should filter projects by a single role', () => {
            // Click on a role filter (e.g., "Fullstack Developer")
            cy.get('[data-testid="role-filter-fullstack-developer"]').should('be.visible').click();

            // Verify filter button is selected
            cy.get('[data-testid="role-filter-fullstack-developer"]').should(
                'have.attr',
                'data-selected',
                'true'
            );

            // Verify filtered count is displayed
            cy.get('[data-testid="filtered-count"]').should('be.visible');
            cy.get('[data-testid="filtered-count"]').should('contain', 'Showing');

            // Verify projects are filtered and count matches
            cy.get('[data-testid="project-summary"]')
                .its('length')
                .then((filteredCount) => {
                    cy.get('[data-testid="filtered-count"]').then(($el) => {
                        const countText = $el.text();
                        const match = countText.match(/Showing (\d+) of (\d+) projects/);
                        if (match) {
                            const showingCount = parseInt(match[1], 10);
                            const totalCount = parseInt(match[2], 10);
                            expect(showingCount).to.be.at.most(totalCount);
                            expect(showingCount).to.equal(filteredCount);
                        }
                    });
                });
        });

        it('should filter projects by multiple roles', () => {
            // Select first role
            cy.get('[data-testid="role-filter-data-engineer"]').should('be.visible').click();

            // Select second role
            cy.get('[data-testid="role-filter-tech-lead"]').should('be.visible').click();

            // Verify both filters are selected
            cy.get('[data-testid="role-filter-data-engineer"]').should(
                'have.attr',
                'data-selected',
                'true'
            );
            cy.get('[data-testid="role-filter-tech-lead"]').should(
                'have.attr',
                'data-selected',
                'true'
            );

            // Verify filtered count shows projects matching either role
            cy.get('[data-testid="filtered-count"]').should('be.visible');
            cy.get('[data-testid="project-summary"]').its('length').should('be.at.least', 1);
        });

        it('should show clear filters button when filters are active', () => {
            // Initially, clear filters button should not be visible
            cy.get('[data-testid="clear-filters"]').should('not.exist');

            // Select a filter
            cy.get('[data-testid="role-filter-fullstack-developer"]').click();

            // Clear filters button should now be visible
            cy.get('[data-testid="clear-filters"]').should('be.visible');
        });

        it('should clear all filters when clear filters button is clicked', () => {
            // Select multiple filters
            cy.get('[data-testid="role-filter-fullstack-developer"]').click();
            cy.get('[data-testid="role-filter-data-engineer"]').click();

            // Verify filters are active
            cy.get('[data-testid="filtered-count"]').should('be.visible');
            cy.get('[data-testid="clear-filters"]').should('be.visible');

            // Clear filters
            cy.get('[data-testid="clear-filters"]').click();

            // Verify all filters are cleared
            cy.get('[data-testid="clear-filters"]').should('not.exist');
            cy.get('[data-testid="filtered-count"]').should('not.exist');
            cy.get('[data-testid="role-filter-fullstack-developer"]').should(
                'have.attr',
                'data-selected',
                'false'
            );
            cy.get('[data-testid="role-filter-data-engineer"]').should(
                'have.attr',
                'data-selected',
                'false'
            );

            // Verify all projects are shown again
            cy.get('[data-testid="project-summary"]').its('length').should('be.at.least', 3);
        });

        it('should toggle filter on and off', () => {
            // Click filter to activate
            cy.get('[data-testid="role-filter-infrastructure-engineer"]').click();
            cy.get('[data-testid="role-filter-infrastructure-engineer"]').should(
                'have.attr',
                'data-selected',
                'true'
            );

            // Verify filtered count is shown
            cy.get('[data-testid="filtered-count"]').should('be.visible');

            // Click filter again to deactivate
            cy.get('[data-testid="role-filter-infrastructure-engineer"]').click();
            cy.get('[data-testid="role-filter-infrastructure-engineer"]').should(
                'have.attr',
                'data-selected',
                'false'
            );

            // Verify filter count is hidden
            cy.get('[data-testid="filtered-count"]').should('not.exist');
        });

        // Note: Testing "No projects found" scenario is not feasible in E2E tests because:
        // 1. Filter buttons only show roles that exist in at least one project
        // 2. The filter uses OR logic (shows projects matching ANY selected role)
        // 3. To get zero results, we'd need roles that don't exist, which won't have filter buttons
        // This edge case is better tested at the unit/component level where we can control the data

        it('should maintain filter state when filtering by different roles', () => {
            // Select first role
            cy.get('[data-testid="role-filter-fullstack-developer"]').click();

            // Verify first filter is active
            cy.get('[data-testid="role-filter-fullstack-developer"]').should(
                'have.attr',
                'data-selected',
                'true'
            );
            cy.get('[data-testid="filtered-count"]').should('be.visible');

            // Select additional role
            cy.get('[data-testid="role-filter-tech-lead"]').click();

            // Verify both filters remain active
            cy.get('[data-testid="role-filter-fullstack-developer"]').should(
                'have.attr',
                'data-selected',
                'true'
            );
            cy.get('[data-testid="role-filter-tech-lead"]').should(
                'have.attr',
                'data-selected',
                'true'
            );

            // Verify project count is still visible
            cy.get('[data-testid="filtered-count"]').should('be.visible');
            cy.get('[data-testid="project-summary"]').its('length').should('be.at.least', 1);
        });
    });
});

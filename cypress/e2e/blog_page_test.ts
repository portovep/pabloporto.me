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

    it('should derive tag filters from the posts', () => {
        // "All" plus one pill per tag present in the content, so a new tag in
        // frontmatter shows up without touching the component.
        cy.get('[data-testid^="tag-filter-"]').should('have.length.at.least', 3);
        cy.get('[data-testid="tag-filter-all"]').should('be.visible');
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

    it('should show only posts belonging to the selected tag', () => {
        // Walks whatever pills the page renders rather than a hardcoded list, so this
        // keeps working as tags are added to or removed from the content.
        const tags: string[] = [];

        cy.get('[data-testid="post-summary"]').its('length').as('totalCount');
        cy.get('[data-testid^="tag-filter-"]')
            .not('[data-testid="tag-filter-all"]')
            .each(($pill) => {
                tags.push(String($pill.attr('data-testid')).replace('tag-filter-', ''));
            })
            .then(function () {
                expect(tags, 'tag pills are derived from the posts').to.have.length.at.least(2);

                let seenAcrossTags = 0;

                tags.forEach((tag) => {
                    cy.get(`[data-testid="tag-filter-${tag}"]`).click();

                    // Every remaining row must carry the selected tag.
                    cy.get('[data-testid="post-summary"]')
                        .should('have.length.at.least', 1)
                        .each(($row) => {
                            expect($row.attr('data-tag'), `row shown under "${tag}"`).to.equal(tag);
                        });

                    // The counter must agree with what is actually rendered.
                    cy.get('[data-testid="post-summary"]')
                        .its('length')
                        .then(function (shown: number) {
                            seenAcrossTags += shown;
                            cy.get('[data-testid="filtered-count"]').should(
                                'have.text',
                                `${shown} of ${this.totalCount} posts`
                            );
                        });

                    cy.get('[data-testid="tag-filter-all"]').click();
                });

                // Each post has exactly one tag, so the per-tag counts must partition the whole set.
                cy.then(function () {
                    expect(seenAcrossTags, 'per-tag counts sum to every post').to.equal(
                        this.totalCount
                    );
                });
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

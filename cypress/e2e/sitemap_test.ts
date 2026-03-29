describe('Sitemap', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should return a valid XML sitemap', () => {
        cy.request('/sitemap.xml').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.headers['content-type']).to.include('xml');
            expect(response.body).to.include('<loc>');
        });
    });

    it('should include all routes found in app/ directory', () => {
        cy.task('getAppRoutes').then((routes) => {
            cy.request('/sitemap.xml').then((response) => {
                const body = response.body as string;
                (routes as string[]).forEach((route) => {
                    expect(body, `Missing route in sitemap: ${route}`).to.include(
                        `https://pabloporto.me${route}`
                    );
                });
            });
        });
    });

    it('should include blog post URLs', () => {
        cy.request('/sitemap.xml').then((response) => {
            expect(response.body).to.include('https://pabloporto.me/blog/');
        });
    });
});

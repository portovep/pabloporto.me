import { defineConfig } from 'cypress';
import fs from 'fs';
import path from 'path';

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3000',
        specPattern: 'cypress/e2e/**/*_test.{js,jsx,ts,tsx}',
        setupNodeEvents(on) {
            on('task', {
                getAppRoutes() {
                    const appDir = path.join(process.cwd(), 'app');
                    return fs
                        .readdirSync(appDir, { withFileTypes: true })
                        .filter(
                            (entry) =>
                                entry.isDirectory() &&
                                fs.existsSync(path.join(appDir, entry.name, 'page.tsx'))
                        )
                        .map((entry) => `/${entry.name}`);
                }
            });
        }
    },
    video: false
});

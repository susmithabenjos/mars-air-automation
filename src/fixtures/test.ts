import { test as base } from '@playwright/test';
import { HomePage } from '@pages/HomePage';
import { ResultsPage } from '@pages/ResultsPage';



type Pages = {
  homePage: HomePage;
  resultsPage: ResultsPage;
};

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  resultsPage: async ({ page }, use) => {
    await use(new ResultsPage(page));
  }
});

export { expect } from '@playwright/test';

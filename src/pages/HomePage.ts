import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  protected readonly path = '';

  readonly departing: Locator;
  readonly returning: Locator;
  readonly promoCode: Locator;
  readonly searchButton: Locator;


  constructor(page: Page) {
    super(page);
    this.departing = page.getByLabel('Departing');
    this.returning = page.getByLabel('Returning');
    this.promoCode = page.locator('#promotional_code');
    this.searchButton = page.getByRole('button', { name: 'Search' });
  }

  async searchFlights(departing: string, returning: string, promo: string | null = null): Promise<void> {
    await this.departing.selectOption({ label: departing });
    await this.returning.selectOption({ label: returning });
    if (promo) {
      await this.promoCode.fill(promo)
    }
    await this.searchButton.click();
  }
}
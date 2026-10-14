import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { MESSAGES } from '../data/Messages';

export class ResultsPage extends BasePage {
    protected readonly path = '';

    readonly seatsAvailable: Locator;
    readonly seatsAvailableMessage: Locator;
    readonly noSeatsMessage: Locator;
    readonly scheduleNotPossibleMessage: Locator;

    readonly anyPromoMessage: Locator;

    constructor(page: Page) {
        super(page);
        // TO VERIFY: each message sits in its own element. If the seat and promo
        // messages share one <p>, exact matching needs adjusting.
        this.seatsAvailable = page.getByText(MESSAGES.seatsAvailableMSg, { exact: true });
        this.seatsAvailableMessage = page.getByText(MESSAGES.seatsAvailable, { exact: true });
        this.noSeatsMessage = page.getByText(MESSAGES.noSeats, { exact: true });
        this.scheduleNotPossibleMessage = page.getByText(MESSAGES.scheduleNotPossible, { exact: true });
        this.anyPromoMessage = page.getByText(/^(Promotional code .* used|Sorry, code .* is not valid)/);
    }

    promoAppliedMessage(code: string, discountPercent: number): Locator {
        return this.page.getByText(MESSAGES.promoApplied(code, discountPercent), { exact: true });
    }
}

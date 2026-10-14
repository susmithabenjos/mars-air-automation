import { JULY, DECEMBER_TWO_YEARS } from '@data/DepartureAndReturn';
import { VALID_PROMO_CODES } from '@data/PromoCodes';
import { test, expect } from '@fixtures/test';

test.describe('#2 Promotional codes', { tag: '@story2' }, () => {
    test.beforeEach(async ({ homePage }) => {
        await homePage.open();
    });

    for (const promo of VALID_PROMO_CODES) {
        test(`TS1-09: valid code ${promo.code} gives ${promo.discountPercent}% discount`, async ({ homePage, resultsPage }) => {
            await homePage.searchFlights(JULY, DECEMBER_TWO_YEARS, promo.code);

            await expect(resultsPage.promoAppliedMessage(promo.code, promo.discountPercent)).toBeVisible();
        });
    }
});
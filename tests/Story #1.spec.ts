import { DECEMBER_TWO_YEARS, JULY, SCHEDULE_OPTIONS } from '@data/DepartureAndReturn';
import { test, expect } from '@fixtures/test';

test.describe('#1 – Basic Search flow', { tag: '@story' }, () => {


    test('TS1-01: Verify the Departure dropdown offers only July and December options', async ({ homePage

    }) => {
        await homePage.open();
        await expect(homePage.departing.locator('option')).toHaveText(SCHEDULE_OPTIONS);
    });


    test('TS1-02: Verify the Return dropdown offers only July and December options', async ({ homePage

    }) => {
        await homePage.open();
        await expect(homePage.returning.locator('option')).toHaveText(SCHEDULE_OPTIONS);
    });


    test('TS1-04: Verify a search with seats shows the seats-available message', async ({ homePage, resultsPage

    }) => {
        await homePage.open();
        await homePage.searchFlights(JULY, DECEMBER_TWO_YEARS);
        await expect((resultsPage.seatsAvailable)).toBeVisible();
        await expect((resultsPage.seatsAvailableMessage)).toBeVisible();
    });


    test('TS1-05: Verify a search with no seats shows the no-seats message', async ({ homePage, resultsPage

    }) => {
        await homePage.open();
        await homePage.searchFlights(JULY, DECEMBER_TWO_YEARS);
        await expect((resultsPage.noSeatsMessage)).toBeVisible();

    });
});                           

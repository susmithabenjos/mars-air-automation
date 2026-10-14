export const MESSAGES = {
    tagline: 'Book a ticket to the red planet now!',
    seatsAvailableMSg: 'Seats available!',
    seatsAvailable: 'Call now on 0800 MARSAIR to book!',
    noSeats: 'Sorry, there are no more seats available.',
    scheduleNotPossible: 'Unfortunately, this schedule is not possible. Please try again.',
    promoApplied: (code: string, discountPercent: number): string =>
        `Promotional code ${code} used: ${discountPercent}% discount!`,
    promoInvalid: (code: string): string => `Sorry, code ${code} is not valid`,
} as const;

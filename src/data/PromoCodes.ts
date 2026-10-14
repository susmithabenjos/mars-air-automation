export interface PromoCase {
    code: string;
    discountPercent: number;
}

export const VALID_PROMO_CODES: readonly PromoCase[] = [
    { code: 'AA0-BBB-000', discountPercent: 0 },
    { code: 'AB1-CDE-001', discountPercent: 10 },
    { code: 'AB2-CDE-114', discountPercent: 20 },
    { code: 'AF3-FJK-418', discountPercent: 30 },
    { code: 'QW4-ERT-565', discountPercent: 40 },
    { code: 'JJ5-OPQ-320', discountPercent: 50 },
    { code: 'MN6-BVC-006', discountPercent: 60 },
    { code: 'KL7-POI-995', discountPercent: 70 },
    { code: 'XY8-UVW-121', discountPercent: 80 },
    { code: 'ZZ9-XYZ-997', discountPercent: 90 },
];


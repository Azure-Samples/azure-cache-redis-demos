import { test, expect } from '@playwright/test';

test.describe('Product Details', () => {
    test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');
    for (let i = 1; i <= 22; i++) {
        test(`should be able to view product details for product ${i}`, async ({ page }) => {
            await page.goto(`/Home/Details/${i}`);
            await expect(page).toHaveURL(`/Home/Details/${i}`);
        });

        test(`should be able to add product ${i} to cart`, async ({ page }) => {
            await page.goto(`/Home/Details/${i}`);
            await page.getByRole('link', { name: 'Shopping Cart' }).click();
            await expect(page).toHaveURL(`/Carts`);
        });
    }
});

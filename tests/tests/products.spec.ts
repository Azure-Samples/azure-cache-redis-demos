import { test, expect } from '@playwright/test';

test.describe('Product Details', () => {
    // Loop through all products, view details, and add to cart
    // NOTE: expect product 5 to fail as it does not exist
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

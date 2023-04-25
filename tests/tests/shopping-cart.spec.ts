import { test, expect } from '@playwright/test';

test.describe('Shopping Cart', () => {
    test('should be able to add item to cart and checkout', async ({ page }) => {
        await page.goto('');
        await page.locator('.button').first().click();
        await page.getByText('Item added:').click();
        await expect(page).toHaveURL('/Carts/Create');
        await page.getByRole('link', { name: 'Shopping Cart' }).click();
        await page.getByRole('cell', { name: 'Items to purchase' }).click();
        await page.getByRole('cell', { name: 'Quantity' }).click();
        await page.getByRole('button', { name: 'Check Out' }).click();
    });
});    
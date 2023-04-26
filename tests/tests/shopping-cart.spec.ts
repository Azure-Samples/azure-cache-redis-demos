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

test.describe('Shopping Cart - Performance', () => {
    test('should be able to add items to cart and measure shopping cart performance', async ({ page }) => {
        // Product ID's to test
        const products = process.env.PRODUCTIDS.split(',');
        // Loop through each product and add to cart
        for (const i of products) {
            await page.goto(`/Home/Details/${i}`);
            await page.getByRole('button', { name: 'Add to cart' }).click();
        }
        // Navigate to shopping cart and measure performance
        await page.goto(`/Cart`);
        const performanceTimingJson = await page.evaluate(() => JSON.stringify(window.performance.timing))
        const performanceTiming = JSON.parse(performanceTimingJson)
        const startToInteractive = performanceTiming.domInteractive - performanceTiming.navigationStart
        test.info().annotations.push({ type: 'Performance', description: `Navigation start to DOM interactive: ${startToInteractive}ms` });
    });
});
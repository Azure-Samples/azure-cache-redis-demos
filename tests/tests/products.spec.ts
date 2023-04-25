import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

test.describe('Product Details', () => {  
    // Use product ID's from CSV   
    const products = parse(fs.readFileSync(path.join(__dirname, 'test-data.csv')), {
        columns: true,
        skip_empty_lines: true
    }); 

    // Loop through all productID's, view details, and add to cart
    for (const ID in products) {
        test(`should be able to view product details for product ${ID}`, async ({ page }) => {
            await page.goto(`/Home/Details/${ID}`);
            await expect(page).toHaveURL(`/Home/Details/${ID}`);
        });

        test(`should be able to add product ${ID} to cart`, async ({ page }) => {
            await page.goto(`/Home/Details/${ID}`);
            await page.getByRole('button', { name: 'Add to cart' }).click();
            await expect(page).toHaveURL(`/Carts/Create`);
        });
    }
});
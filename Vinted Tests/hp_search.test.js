import { test, expect } from '@playwright/test';

test('should test that help center search is working', async ({ page }) => {
  await page.goto('https://www.vinted.com/');
  await page.getByRole('link', { name: 'United Kingdom' }).click();
  await page.getByRole('button', { name: 'Accept all' }).click();
  await page.getByRole('button', { name: 'Catalogue' }).click();
  await page.getByTestId('search-bar-search-type-faq').click();
  await page.getByRole('textbox', { name: 'Help Centre' }).click();
  await page.getByRole('textbox', { name: 'Help Centre' }).fill('payment failed');
  await page.getByRole('textbox', { name: 'Help Centre' }).press('Enter');
  await expect(page.getByRole('heading', { name: 'Help Centre' })).toBeVisible();
    
});
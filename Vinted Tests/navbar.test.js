import { test, expect } from '@playwright/test';

test('should test that nav bar items are present', async ({ page }) => {
  await page.goto('https://www.vinted.com/');
  await page.getByRole('link', { name: 'United Kingdom' }).click();
  await page.getByRole('button', { name: 'Accept all' }).click();

  const navbar = page.locator('.l-header__navigation .u-desktops-only');
  const categories = [
    'Women', 'Men', 'Designer', 'Kids', 'Home',
    'Electronics', 'Entertainment', 'Hobbies & collectables', 'Sports', 'About'
  ];

  for (const item of categories) {
    const locator = navbar.getByText(item, { exact: true });
    await expect(locator).toBeVisible();
  }
});

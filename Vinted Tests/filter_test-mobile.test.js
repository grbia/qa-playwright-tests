const { test, expect, devices } = require('@playwright/test');

// Use iPhone 13 emulation
test.use(devices['iPhone 13']);

test.describe('Should test filter items on mobile device', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.vinted.com/');
    await page.getByRole('link', { name: 'United Kingdom' }).click();
    await page.getByRole('button', { name: 'Accept all' }).click();
  });

  const categories = [
    ['Women', 'New in Women'],
    ['Men', 'New in Men'],
    ['Designer', 'Shop by brand'],
    ['Kids', 'New in Kids'],
    ['Home', 'New in Home'],
    ['Electronics', 'New in Electronics'],
    ['Entertainment', 'New in Entertainment'],
  ];

  categories.forEach(([button, heading]) => {
    test(`shows "${heading}" after selecting "${button}"`, async ({ page }) => {
      await page.getByRole('button', { name: button, exact: true }).click();
      await expect(page.getByRole('heading', { name: heading })).toHaveText(heading);
    });
  });
});

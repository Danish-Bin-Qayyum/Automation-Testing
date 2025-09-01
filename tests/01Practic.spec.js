import { test, expect } from '@playwright/test';

test('basic assertion example', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Assertion: Check that the title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);

  // Assertion: Check that a button is visible
  const getStarted = page.locator('text=Get Started');
  await expect(getStarted).toBeVisible();

  // Assertion: Check that a URL is correct
  await expect(page).toHaveURL('https://playwright.dev/');
});

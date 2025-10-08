import { test, expect } from '@playwright/test';

test('Validate Youtube Tab Title', async ({ page }) => {
   // step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   // that are designed to run automatically at the execution"

   // Returns the main resource response. In case of multiple redirects,
   // the navigation will resolve with the first non-redirect response.
  await page.goto('https://www.youtube.com/');
  
  // before actio image
  await expect(page).toHaveScreenshot("githubepage.png")

  await page.locator('#login_field').click();
  await page.locator('#login_field').fill('tester talk')

  // before actions image
  await expect(page).toHaveScreenshot("githubepage.png")

});
import { test, expect } from '@playwright/test';

test('read env file in playwright', async ({ page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
  await page.goto("https://www.google.com/");

  // search with keyword
  await page.locator("//textarea[@id='APjFqb']").click()
  await page.locator("//textarea[@id='APjFqb']").fill("playwright by tester talt")
  await page.locator("//textarea[@id='APjFqb']").press("Enter")

  await page.waitForTimeout(5000)

});

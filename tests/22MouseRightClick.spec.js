import { test, expect } from '@playwright/test';

test('basic assertion example', async ({ page }) => {

  await page.goto("https://forum.opencart.com/viewtopic.php?t=228701")
  const button= await page.locator("//a[@class='btn btn-link navbar-btn']")
  
  await button.click({button:"right"})
  await page.waitForTimeout(1000)
});

                
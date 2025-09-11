import { test, expect } from '@playwright/test';

test('basic assertion example', async ({ page }) => {
  await page.goto("https://forum.opencart.com/viewtopic.php?t=228701")
  const desktops = await page.locator("//ul[@class='nav navbar-nav']//a[normalize-space()='Features']")
  
  await desktops.click()
  //await page.waitForTimeout(1000)
});

				
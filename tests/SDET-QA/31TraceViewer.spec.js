import { test, expect } from '@playwright/test';

test('basic assertion example', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link',{name:'Log in'}).click()
  await page.locator("input[placeholder='Username']").fill('Danish Qayyum');
  await page.locator("//input[@id='loginpassword']").fill('danishqayyum123');
  await page.getByRole('button',{name:'Log in'}).click()
  await expect(page.locator('#logout2')).toBeVisible()

});

import { test, expect } from '@playwright/test';

/*************  Question **************/
/*
 * how we can record our video of your test
 */

/*
 * Playwright Test can record videos for your tests, controlled by the video option in your Playwright config. By default videos are off.
 * 'off' - Do not record video.
 * 'on' - Record video for each test.
 * 'retain-on-failure' - Record video for each test, but remove all videos from successful test runs.
 * 'on-first-retry' - Record video only when retrying a test for the first time.
 */

test('basic assertion example', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link',{name:'Log in'}).click()
  await page.locator("input[placeholder='Username']").fill('Danish Qayyum');
  await page.locator("//input[@id='loginpassword']").fill('danishqayyum123');
  await page.getByRole('button',{name:'Log in'}).click()
  await expect(page.locator('#logout2')).toBeVisible()

});

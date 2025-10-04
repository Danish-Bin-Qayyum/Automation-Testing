import { test, expect } from '@playwright/test';

/******************** Questios ****************/
/*
 * How we can take screenshots 
 * How we can take screenshot of full page 
 * how we can captur into buffer
 * how we take screenshot of you element in test
 * how to manage configration file about screenshots
 * how we take screenshot of you test
 */

/*
 * *****Screenshots
 * Here is a quick way to capture a screenshot and save it into a file:
 */

test('basic assertion example', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/index.html');
  await page.screenshot({path:'tests/screenshots/'+Date.now+'HomePage.png'})//Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC)

});

/*
 * *****Full page screenshots
 * Full page screenshot is a screenshot of a full scrollable page,
 * as if you had a very tall screen and the page could fit it entirely.
 */

test('Full page screenshot', async ({ page }) => {

  await page.goto('https://www.opencart.com/index.php?route=cms/demo');
  await page.screenshot({path:'tests/sc reenshots/'+Date.now()+'FullPage.png',fullPage:true})

});

/*
 * *****Element screenshot
 * Sometimes it is useful to take a screenshot of a single element.
 */

test.only('Element secreeshot', async ({ page }) => {

  await page.goto('https://www.opencart.com/index.php?route=cms/demo');
  await page.locator("//a[@href='https://demo.opencart.com/']").screenshot({path:'tests/screenshots/'+'Macbook.png'})

});

/*
 * *****Capture into buffer
 * Rather than writing into a file, you can get a buffer with the image and post-process it
 * or pass it to a third party pixel diff facility.
 */


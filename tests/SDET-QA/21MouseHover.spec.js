import { test, expect } from '@playwright/test';

/*************  Question **************/
/*
 * how to perform mouse Ation in web page during the automate test cases
 * how many method of mouse in playwright API 
 */

/*
 * *****Mouse
 * The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.
 * Every page object has its own Mouse, accessible with page.mouse.
 */

test('mouse hover', async ({ page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
  await page.goto("https://forum.opencart.com/viewtopic.php?t=228701")
   // locat and store the locator in variable
  const desktops = await page.locator("//ul[@class='nav navbar-nav']//a[normalize-space()='Features']")
  const macbook = await page.locator("//ul[@class='nav navbar-nav']//a[normalize-space()='Features']")

   // mouse hovering
  await desktops.hover()
  await macbook.hover()
  
  //await page.waitForTimeout(1000)
});

				
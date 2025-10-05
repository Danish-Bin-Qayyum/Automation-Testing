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

test('basic assertion example', async ({ page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.

  await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html")

  // locat and store the locator in variable
  const button= await page.locator("//span[@class='context-menu-one btn btn-neutral']")

  // click the locator on right side
  await button.click({button:"right"})
  
  //Pause the execution before moving to the next step
  await page.waitForTimeout(1000)
});

                
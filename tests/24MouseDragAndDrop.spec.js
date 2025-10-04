import { test, expect } from '@playwright/test';

/*************  Question **************/
/*
 * how to perform Drag and Drop action in web page during the automate test cases
 * how many method of mouse in playwright API 
 */

/*
 * *****Mouse
 * The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.
 * Every page object has its own Mouse, accessible with page.mouse.
 */



test('Mouse Double Click', async ({ page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
  await page.goto("https://testautomationpractice.blogspot.com/")
  // locat and store the locator in variable
  const rome= await page.locator("//div[@id='draggable']")
  // locat and store the locator in variable
  const italy= await page.locator("//div[@id='droppable']")

  //appraoch 1
  await rome.hover()
  await page.mouse.down()

  await italy.hover()
  await page.mouse.up()
  
  await page.waitForTimeout(5600)

  //approach two
  await rome.dragTo(italy)

});

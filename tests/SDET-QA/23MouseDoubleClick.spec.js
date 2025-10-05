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

test('Mouse Double Click', async ({  page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
  await page.goto("https://testautomationpractice.blogspot.com/")
  // locate the element
  const button= await page.locator("//button[normalize-space()='Copy Text']")
  // This method double clicks the element
  await button.dblclick()
  const f2=await page.locator("//input[@id='field2']")
  // Ensures the Locator points to an element with the given input value. You can use regular expressions for the value as well.
  await expect(f2).toHaveValue("Hello World!") 
  //Pause the execution before moving to the next step
  await page.waitForTimeout(1000)
});

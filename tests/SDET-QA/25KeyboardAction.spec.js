import { test, expect } from '@playwright/test';

/*************  Question **************/
/*
 * how to perform keyboard Ation in web page during the automate test cases
 * how many method of keyboard in playwright API 
 */

/*
 * *****Keyboard
 * Keyboard provides an api for managing a virtual keyboard.
 * The high level api is keyboard.type(),
 * which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page.
 * For finer control, you can use keyboard.down(), keyboard.up(), and keyboard.
 * insertText() to manually fire events as if they were generated from a real keyboard.
 */ 


test('Mouse Double Click', async ({ page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
  await page.goto("https://gotranscript.com/text-compare")

  await page.locator("//textarea[@placeholder='Paste one version of the text here.']").fill("wellcome to automation")
  //await page.type("//textarea[@placeholder='Paste one version of the text here.","wellcome to automation")
  //ctrl + A
  await page.keyboard.press("Meta+A")

  //ctrl + c
  await page.keyboard.press('Meta+C')

  //tab
  await page.keyboard.down('Tab')
  await page.keyboard.up('Tab')

  //ctrl + v
  await page.keyboard.press('Meta+V')
  // Waits for the given timeout in milliseconds.
  await page.waitForTimeout(5000)
  
});

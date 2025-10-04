import { test, expect } from '@playwright/test';
/*
 * how to handle tables and pagination in playwright 
 */ 
// tables
test('handling tables', async ({ page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
  await page.goto('https://testautomationpractice.blogspot.com/');

  const table=await page.locator("//table[@id='productTable']")

  // print out the number of columns of element present in a table 
  const columns=await table.locator("thead tr th")
  console.log("number of columns ",await columns.count());

  // print out the number of rows of element present in a table 
  const rows=await table.locator("tbody tr")
  console.log("number of rows",await rows.count());
  
  //  This is a Playwright test assertion method.
  //  You use it to check if something is exactly equal to what you expect.
  expect(await columns.count()).toBe(4)

  //  This is a Playwright test assertion method.
  //  You use it to check if something is exactly equal to what you expect.
  expect(await rows.count()).toBe(5)


});

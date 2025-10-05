import { test, expect } from '@playwright/test';

/*
 * how to handle different type of Date picker and calenders in playwright 
 */ 
test('Date Picker', async ({ page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
  await page.goto('https://testautomationpractice.blogspot.com/');

  //await page.fill("//input[@id='datepicker']", "23/15/2025")

  // Date Picker (this method apply when we do not allow to type date on webpage)
  const year ="2000"
  const month = "march"
  const date = "20"

  // step 2 click the input field
  await page.click("//input[@id='datepicker']")
  
  // step 3 start loop until the year and month is match
  while (true) {
    const currentYear = await page.locator("//span[@class='ui-datepicker-month']").textContent()
    const currentMonth = await page.locator("//span[@class='ui-datepicker-year']").textContent()

    if (currentYear == year && currentMonth == month ) {
       break;
    }
    await  page.locator("//a[@title='Next']").click()
  }

  // step 4: A timeout to wait for
  await page.waitForTimeout(3000)

  
})

/*
   By default, failed assertion will terminate test execution.
   Playwright also supports soft assertions:
   failed soft assertions do not terminate test execution, but mark the test as failed.
*/

const {test , expect} = require('@playwright/test')// importe here tow modules

test('HomePageTest',async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');

   await expect.soft(page).toHaveTitle('STORE123')
   await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html')
   await expect.soft(page.locator('.navbar-brand')).toBeVisible()
})

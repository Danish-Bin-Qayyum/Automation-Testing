
const {test , expect} = require('@playwright/test')// importe here tow modules

/*
 * what is hard assertion 
 */ 

/*
 * By default, failed assertion will terminate test execution.
 * Playwright also supports soft assertions:
 * failed soft assertions do not terminate test execution, but mark the test as failed.
 */

test('HomePageTest',async ({page})=>{

   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
   await page.goto('https://www.demoblaze.com/index.html');
   
   // step 2 : expected the tilte
   await expect.soft(page).toHaveTitle('STORE123')
   // step 3 : expected the URL
   await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html')
   // step 4 : expected  the locator to be visible
   await expect.soft(page.locator('.navbar-brand')).toBeVisible()
})
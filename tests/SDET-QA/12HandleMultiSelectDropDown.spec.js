const {test , expect} = require('@playwright/test')// importe here tow modules

test('HomePageTest',async ({page})=>{
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
    await page.goto('https://testautomationpractice.blogspot.com/');

   //  This method waits for an element matching selector,
   //  waits for actionability checks,
   // 
   //  waits until all specified options are present in the <select> element and selects these options
    await page.selectOption('@colors' ,['Blue','Red','Yellow'])
   // Waits for the given timeout in milliseconds.
    await page.waitForTimeout(3020)
 
})
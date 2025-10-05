const {test , expect} = require('@playwright/test')// importe here tow modules

// how to handle dropdown menu
test('HomePageTest',async ({page})=>{
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
    await page.goto('https://testautomationpractice.blogspot.com/');

    // multiple ways of to select option from the dropdown
    //await page.locator("@country").selectOption({label : 'India'  }) label and visible text
    //await page.locator("//select[@id='country']").selectOption('India')
    //await page.locator("//select[@id='country']").selectOption({value :'uk'})
    //await page.locator("//select[@id='country']").selectOption({index : 2})
    //await page.selectOption("//select[@id='country']",'India')
   
      await page.waitForTimeout(3020)
 
})
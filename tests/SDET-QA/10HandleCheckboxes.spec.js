const {test , expect} = require('@playwright/test')// importe here tow modules

// how to handle check box in test
test('HomePageTest',async ({page})=>{
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
   await page.goto('https://testautomationpractice.blogspot.com/');

   // single checkbox (we are handling the single checkbox here )

   // step 1 : perfoam the action on locater
   //await page.locator('//input[@id="name"]').check()
   await page.locator("//input[@id='sunday']").check()

   // step 1 : Ensures the Locator points to a checked input.
   await expect( await page.locator("//input[@id='sunday']")).toBeChecked()
   // step 1 : Returns whether the element is checked.
   // Ensures that value is true in a boolean context
   await expect( await page.locator("//input[@id='sunday']").isChecked()).toBeTruthy()
   // step 1 : Returns whether the element is checked.
   // Ensures that value is fale in a boolean context
   await expect (await page.locator("//input[@id='monday']").isChecked()).toBeFalsy() 
   
   // multiple checkbox
   const checklocatore=[
    "//input[@id='monday']",
    "//input[@id='tuesday']",
    "//input[@id='friday']"
   ];
   for( const locater of checklocatore)
    {
        await  page.locator(locater).check()
    }
   for( const locater of checklocatore)
    {
      if(await page.locator(locater).isChecked())
        
        {
         await page.locator(locater).uncheck()
        }
    }

   // step 1 : 
   // Pause the execution before moving to the next step*/
   await page.waitForTimeout(1000)

})
const {test , expect} = require('@playwright/test')// importe here tow modules

// how to handle input box in your test 
test('HomePageTest',async ({page})=>{
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
   await page.goto('https://testautomationpractice.blogspot.com/');

   //inputbox fisrtname (before perfoaming action we validation our locator)
   
   // step 2 : Ensures that Locator points to an attached and visible DOM node.
   await expect(await page.locator("//input[@id='name']")).toBeVisible()
   // step 3 : Ensures the Locator points to an empty editable element or to a DOM node that has no text.
   await expect(await page.locator("//input[@id='name']")).toBeEmpty()
   // step 4 : Ensures the Locator points to an editable element.
   await expect(await page.locator("//input[@id='name']")).toBeEditable()
   // step 5 : Ensures the Locator points to an enabled element.
   await expect(await page.locator("//input[@id='name']")).toBeEnabled()

   // step 6 : This method waits for an element matching selector, waits for actionability checks, focuses the element, fills it
   //await expect( await page.locator('//input[@id="name"]')).toBeChecked()
   await page.fill("//input[@id='name']",'Danish')

   // step 7 : Pause the execution before moving to the next step
   await page.waitForTimeout(1000)

})
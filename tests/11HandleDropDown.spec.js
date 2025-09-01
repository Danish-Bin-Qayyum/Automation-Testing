const {test , expect} = require('@playwright/test')// importe here tow modules

test('HomePageTest',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // multiple ways of to select option from the dropdown
    //await page.locator("@country").selectOption({label : 'India'  }) label and visible text
    //await page.locator("//select[@id='country']").selectOption('India')
    //await page.locator("//select[@id='country']").selectOption({value :'uk'})
    //await page.locator("//select[@id='country']").selectOption({index : 2})
    //await page.selectOption("//select[@id='country']",'India')
   
      await page.waitForTimeout(3020)
 
})
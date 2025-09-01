const {test , expect} = require('@playwright/test')// importe here tow modules

test('HomePageTest',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    
    await page.selectOption('@colors' ,['Blue','Red','Yellow'])
   
      await page.waitForTimeout(3020)
 
})  
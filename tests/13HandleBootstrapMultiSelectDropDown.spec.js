const {test , expect} = require('@playwright/test')// importe here tow modules

test('HomePageTest',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    
    await page.locator().click()
    //const options= await page.locator()
    //await expect(options).toHaveCount(11)

    //2
    //const options=await page.$$()
    //await expect(options.length).toBe()

    //3
    const options=await page.$$()
    for(let option of options){
        const value=await option.textContent()
        console.log();

        if(value.includes()|| value.includes()){

            await option.click()
        }
    }
   
      await page.waitForTimeout(3020)
 
})
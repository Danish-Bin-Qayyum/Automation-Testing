const {test , expect} = require('@playwright/test')// importe here tow modules

test('HomePageTest',async ({page})=>{
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
    await page.goto('https://testautomationpractice.blogspot.com/');

    // step 2 : click the locator
    await page.locator().click()
    //const options= await page.locator()
    //await expect(options).toHaveCount(11)

    //2
    //const options=await page.$$()
    //await expect(options.length).toBe()

    // step : 3 make the loop fuction for finding the value
    const options=await page.$$()
    for(let option of options){
        const value=await option.textContent()
        console.log();

        if(value.includes()|| value.includes()){

            await option.click()
        }
    }
    // stepn 4 :  Pause the execution before moving to the next step
    await page.waitForTimeout(3020)
 
})
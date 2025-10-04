const {test , expect} = require('@playwright/test')// importe here tow modules

test('HomePageTest',async ({page})=>{
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.    

   await page.goto('https://www.redbus.in/');

   // step 2 : find locator and fill
   await page.locator('#src').fill('Delhi')
   // step 3 : wait for the selector 
   await page.waitForSelector("//li[contains(@class, 'sc-iwskb')]/div/text[1]")
   // step 4 : make the function for multiple locators print
   const fromCityOptions = await page.$$("//li[contains(@class, 'sc-iwskb')]/div/text[1]")
    for( let option of fromCityOptions ){
        
        const value=await option.textContent()
        console.log(value);
    }


})

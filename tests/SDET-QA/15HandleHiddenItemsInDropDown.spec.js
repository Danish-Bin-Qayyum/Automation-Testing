const {test , expect} = require('@playwright/test')// importe here tow modules
/*
 * how to handle hidden item inside the dropdown menu in playwright 
 */ 
test('HomePageTest',async ({page})=>{
     //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    // step 2 : find locator and fill
    await page.locator("input[placeholder='Username']").fill('Admin');
    // step 3 : find locator and fill
    await page.locator("//input[@placeholder='Password']").fill('admin123');
    // step 4 : find locator and click the locator
    await page.locator("//button[normalize-space()='Login']").click();

    // step 5 : click on drop down 
    await page.locator('')

    // step 6 : waiting for options
    await page.waitForTimeout(3020)
    // step 7 : make the function for multiple locators print
    const options=await page.$$()

    for(let option of options){
      const jobTile=await option.textContent()
      console.log(jobTile);
    }
 
})  
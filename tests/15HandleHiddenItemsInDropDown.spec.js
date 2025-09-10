const {test , expect} = require('@playwright/test')// importe here tow modules

test('HomePageTest',async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("input[placeholder='Username']").fill('Admin');
    await page.locator("//input[@placeholder='Password']").fill('admin123');
    await page.locator("//button[normalize-space()='Login']").click();

    /*await page.locator('').click('')

    //click on drop down 
    await page.locator('')

    //waiting for options
    await page.waitForTimeout(3020)

    const options=await page.$$()

    for(let option of options){
      const jobTile=await option.textContent()
      console.log(jobTile);
    }*/
 
})  
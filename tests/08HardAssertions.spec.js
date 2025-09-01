const {test , expect} = require('@playwright/test')// importe here tow modules

test('HomePageTest',async ({page})=>{
    //step 2 : Navigate the page by link
    await page.goto('https://www.demoblaze.com/index.html');

   await expect.soft(page).toHaveTitle('STORE123')
   await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html')
   await expect.soft(page.locator('.navbar-brand')).toBeVisible()
})

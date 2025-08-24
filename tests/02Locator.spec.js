const {test , expect} = require('@playwright/test')// importe here two modules
//import { text,expect } from '@playwright/test'

test('get started link', async ({ page }) => {
  
      await page.goto('https://www.demoblaze.com/index.html')
     //click on login button  -property
     //await page.locator('').click()
     await page.click('id=login2')

     //provide username  - css
     await page.locator('//input[@id="loginusername"]').fill('Danish Qayyum')
     //await page.fill('//input[@id="loginusername"]')
    //await page.type('')

    //providing password  -css
    await page.fill("//input[@id='loginpassword']",'danishqayyum123')

    //click on login button 
    await page.click('//button[@onclick="logIn()"]')

    //verify logout link presence  -xpath
    const logoutlink = await page.locator("//a[@id='logout2']")

    await expect(logoutlink).toBeVisible()
    await page.close()

});
  
const {test , expect} = require('@playwright/test')// importe here two modules
//import { text,expect } from '@playwright/test'

test('get started link', async ({ page }) => {
  
    //step 1 : Navigate the page by link
    await page.goto('https://www.demoblaze.com/index.html')
     
    //step 2 : click on login button  -property
    //await page.locator('').click()
    await page.click('id=login2')

    //step 3 : provide username  - css
    //await page.locator('//input[@id="loginusername"]').fill('Danish Qayyum')   
    //await page.fill('//input[@id="loginusername"]')
    //await page.type('')

    //providing password  -css
    await page.fill("//input[@id='loginpassword']",'danishqayyum123')       

    //step 4 : click on login button 
    await page.click('//button[@onclick="logIn()"]')

    //step 5 : verify logout link presence  -xpath
    const logoutlink = await page.locator("//a[@id='logout2']")

    //step 6 : validate link to be visible in dom
    await expect(logoutlink).toBeVisible()
    
    //step 1 : close the page
    await page.close()

});  
  
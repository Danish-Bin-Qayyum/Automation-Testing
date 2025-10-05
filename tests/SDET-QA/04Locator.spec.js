const {test , expect} = require('@playwright/test')// importe here two modules
//import { text,expect } from '@playwright/test'

//multiple approache of locating page elements
test('get started link', async ({ page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
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
  
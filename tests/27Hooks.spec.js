import { test, expect } from '@playwright/test';

test('Mouse Double Click', async ({ page }) => {

  await page.goto("https://www.demoblaze.com/index.html")

  //login
  await page.locator("//a[@id='login2']").click()
  await page.locator("//input[@id='loginusername']").fill("Danish Qayyum")
  await page.locator("//input[@id='loginpassword']").fill("danishqayyum123")
  await page.locator("//button[normalize-space()='Log in']").click()

  //Home Page
  const products=await page.$$(".hrefch")
  console.log(products);
  //expect(products).toHaveLength(9)

  // logout
  //await page.locator().click()





  


  await page.waitForTimeout(5000)
  

})
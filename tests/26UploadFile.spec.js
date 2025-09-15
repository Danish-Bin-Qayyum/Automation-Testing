import { test, expect } from '@playwright/test';

test('Mouse Double Click', async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/")

  const a= await page.waitForSelector("//input[@id='singleFileInput']").click()
  a.setInputFiles('tests\textFile.pdf')



  


  await page.waitForTimeout(5000)
  

})
import { test, expect } from '@playwright/test';

test('Mouse Double Click', async ({ page }) => {

  await page.goto("https://gotranscript.com/text-compare")

  await page.locator("//textarea[@placeholder='Paste one version of the text here.']").fill("wellcome to automation")

  //await page.t

  //ctrl + A
  await page.keyboard.press("Meta+A")

  //ctrl + c
  await page.keyboard.press('Meta+C')

  //tab
  await page.keyboard.down("tab")
  await page.keyboard.up("tab")

  //ctrl + v
  await page.keyboard.press('Meta+V')


  await page.waitForTimeout(5000)
  

});

import { test, expect } from '@playwright/test';

test('Mouse Double Click', async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/")
  const rome= await page.locator("//div[@id='draggable']")
  const italy= await page.locator("//div[@id='droppable']")

  //appraoch 1
  /*await rome.hover()
  await page.mouse.down()

  await italy.hover()
  await page.mouse.up()
  
  await page.waitForTimeout(5600)*/

  //approach two
  await rome.dragTo(italy)

});

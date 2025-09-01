import { test, expect } from '@playwright/test';

/*test('has title', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  //Enable diloge window handler
  page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alter box!')
    await dialog.accept()
  })
await  page.click("//button[@id='alertBtn']")

});*/

/*test('has title', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  //Enable diloge window handler
  page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('confirm')
    expect(dialog.message()).toContain('Press a button!')
    await dialog.accept()
  })
await  page.click("//button[@id='confirmBtn']")

});*/

test('has title', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  //Enable diloge window handler
  page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('promt')
    expect(dialog.message()).toContain('Please enter your name:')
    await dialog.accept()
  })
await  page.click("//button[@id='promptBtn']")

});
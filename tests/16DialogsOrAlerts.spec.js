import { test, expect } from '@playwright/test';

/*test('has title', async ({ page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
  await page.goto('https://testautomationpractice.blogspot.com/');

  // step 2 :Enable diloge window handler
  page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alter box!')
    await dialog.accept()
  })
    // step 3 : click the locator
await  page.click("//button[@id='alertBtn']")

});*/

/*test('has title', async ({ page }) => {

   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.  
  await page.goto('https://testautomationpractice.blogspot.com/');


  page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('confirm')
    expect(dialog.message()).toContain('Press a button!')
    await dialog.accept()
  })
    
    await  page.click("//button[@id='confirmBtn']")

});*/

/*
 * how to handle different type of dialods nad alerts in playwright 
 */ 
test('has title', async ({ page }) => {

   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  // step 2 :Enable diloge window handler
  page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('promt')
    expect(dialog.message()).toContain('Please enter your name:')
    await dialog.accept()
  })

  // step 3 : click the locator
  await  page.click("//button[@id='promptBtn']")

});
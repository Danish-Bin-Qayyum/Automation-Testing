import { test, expect } from '@playwright/test';

test('Validate Youtube Tab Title', async ({ page }) => {
   // step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   // that are designed to run automatically at the execution"

   // Returns the main resource response. In case of multiple redirects,
   // the navigation will resolve with the first non-redirect response.
   //await page.goto('https://www.youtube.com/');

  // by role 
  //await page.goto('https://www.google.com/')
  //await page.getByLabel('Search',{expect:trur}).fill('testing by tester talk')
  //await page.getByLabel('Search',{expect:trur}).press('Enter')

  // by alt test
  //await page.goto('')
  //await page.getByAltText('').click()

  //by test id
  //await page.goto('')
  //await page.getByTestId('').fill('')

  // by text 
  //await page.goto()
  //await page.getByAltText('')

  // by title
  //wait page.goto('')
  // await page.getByTitle('').click()
  

  
});
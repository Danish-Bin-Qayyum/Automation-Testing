import { test, expect } from '@playwright/test';

test('test 1 tag1', async ({ page }) => {
   // step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   // that are designed to run automatically at the execution"

   // Returns the main resource response. In case of multiple redirects,
   // the navigation will resolve with the first non-redirect response.
  await page.goto('https://www.youtube.com/');

  // step 2 search with keywords
   await page.getByPlaceholder("Search").click()
   await page.getByPlaceholder("Search").fill("cypress by tester talk")

   await expect(page.getByRole('button', {name:'Search' , exact: true})).toBeEnabled()
   await page.getByRole('button', {name:'Search' , exact: true}).click()

   await page.waitForTimeout(5000);
  // step 3 click on playwright
  await page.locator("//button[@title='Search']//div").click()
  await page.locator("//span[contains(text(),'Cypress by Testers Talk☑️')]").click()

  // step 4 validate tiltle 
  await expect(page).toHaveTitle("Cypress Tutorial Full Course | Cypress Automation | Learn Cypress in 5 Hrs - YouTube")

  // Expect a title "to contain" a substring.
  await page.close()
});

import { test, expect } from '@playwright/test';

test('test2 @tag1', async ({ page }) => {
   // step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   // that are designed to run automatically at the execution"

   // Returns the main resource response. In case of multiple redirects,
   // the navigation will resolve with the first non-redirect response.
  await page.goto('https://www.youtube.com/');

  // step 2 search with keywords
   await page.getByPlaceholder("Search").click()
   await page.getByPlaceholder("Search").fill("cypress by tester talk")

   await expect(page.getByRole('button', {name:'Search' , exact: true})).toBeEnabled()
   await page.getByRole('button', {name:'Search' , exact: true}).click()

   await page.waitForTimeout(5000);
  // step 3 click on playwright
  await page.locator("//button[@title='Search']//div").click()
  await page.locator("//span[contains(text(),'Cypress by Testers Talk☑️')]").click()

  // step 4 validate tiltle 
  await expect(page).toHaveTitle("Cypress Tutorial Full Course | Cypress Automation | Learn Cypress in 5 Hrs - YouTube")

  // Expect a title "to contain" a substring.
  await page.close()
});

import { test, expect } from '@playwright/test';

test('test3 @tage2', async ({ page }) => {
   // step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   // that are designed to run automatically at the execution"

   // Returns the main resource response. In case of multiple redirects,
   // the navigation will resolve with the first non-redirect response.
  await page.goto('https://www.youtube.com/');

  // step 2 search with keywords
   await page.getByPlaceholder("Search").click()
   await page.getByPlaceholder("Search").fill("cypress by tester talk")

   await expect(page.getByRole('button', {name:'Search' , exact: true})).toBeEnabled()
   await page.getByRole('button', {name:'Search' , exact: true}).click()

   await page.waitForTimeout(5000);
  // step 3 click on playwright
  await page.locator("//button[@title='Search']//div").click()
  await page.locator("//span[contains(text(),'Cypress by Testers Talk☑️')]").click()

  // step 4 validate tiltle 
  await expect(page).toHaveTitle("Cypress Tutorial Full Course | Cypress Automation | Learn Cypress in 5 Hrs - YouTube")

  // Expect a title "to contain" a substring.
  await page.close()
});
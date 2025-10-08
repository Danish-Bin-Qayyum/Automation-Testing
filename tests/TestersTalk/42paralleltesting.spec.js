
import { test, expect } from '@playwright/test';


// group  1
test.describe("smoking testing",() => {

    test('test 1', async ({ page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
  await page.goto("https://www.google.com/search?q=Playwright+by+Testers+Talk&rlz=1C1CHBF_en-GBPK1183&oq=playwright+by+&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMggICRAAGBYYHtIBCjE2MTIzajBqMTWoAgiwAgHxBarYtbwhXHe5&sourceid=chrome&ie=UTF-8");
   
  // assret url
  await expect(page).toHaveURL("https://www.google.com/search?q=Playwright+by+Testers+Talk&rlz=1C1CHBF_en-GBPK1183&oq=playwright+by+&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMggICRAAGBYYHtIBCjE2MTIzajBqMTWoAgiwAgHxBarYtbwhXHe5&sourceid=chrome&ie=UTF-8")
  
  // assert title
  await expect(page).toHaveTitle("playwright by testers talt - Google Search")

  // assert text
  await expect(page.locator("[aria-label='Search']").first()).toHaveText("playwright by testers talt")

  // assert
  await expect(page.locator("[aria-label='Search']").first()).toBeEditable()
  await expect(page.locator("[aria-label='Search']").first()).toBeAttached()
  await expect(page.locator("[aria-label='Search']").first()).toBeVisible()
  await expect(page.locator("[aria-label='Search']").first()).toBeEnabled()

  //assert disable empty count
  await expect(page.locator("[aria-label='Search']").first()).not.toBeEmpty()

  await page.waitForTimeout()

});

test.only('test 2', async ({ page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
  await page.goto("https://www.google.com/search?q=Playwright+by+Testers+Talk&rlz=1C1CHBF_en-GBPK1183&oq=playwright+by+&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMggICRAAGBYYHtIBCjE2MTIzajBqMTWoAgiwAgHxBarYtbwhXHe5&sourceid=chrome&ie=UTF-8");
   
  // assret url
  await expect(page).toHaveURL("https://www.google.com/search?q=Playwright+by+Testers+Talk&rlz=1C1CHBF_en-GBPK1183&oq=playwright+by+&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMggICRAAGBYYHtIBCjE2MTIzajBqMTWoAgiwAgHxBarYtbwhXHe5&sourceid=chrome&ie=UTF-8")
  
  // assert title
  await expect(page).toHaveTitle("playwright by testers talt - Google Search")

  // assert text
  await expect(page.locator("[aria-label='Search']").first()).toHaveText("playwright by testers talt")

  // assert
  await expect(page.locator("[aria-label='Search']").first()).toBeEditable()
  await expect(page.locator("[aria-label='Search']").first()).toBeAttached()
  await expect(page.locator("[aria-label='Search']").first()).toBeVisible()
  await expect(page.locator("[aria-label='Search']").first()).toBeEnabled()

  //assert disable empty count
  await expect(page.locator("[aria-label='Search']").first()).not.toBeEmpty()

  await page.waitForTimeout()

});

test.skip('test 3', async ({ page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
  await page.goto("https://www.google.com/search?q=Playwright+by+Testers+Talk&rlz=1C1CHBF_en-GBPK1183&oq=playwright+by+&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMggICRAAGBYYHtIBCjE2MTIzajBqMTWoAgiwAgHxBarYtbwhXHe5&sourceid=chrome&ie=UTF-8");
   
  // assret url
  await expect(page).toHaveURL("https://www.google.com/search?q=Playwright+by+Testers+Talk&rlz=1C1CHBF_en-GBPK1183&oq=playwright+by+&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMggICRAAGBYYHtIBCjE2MTIzajBqMTWoAgiwAgHxBarYtbwhXHe5&sourceid=chrome&ie=UTF-8")
  
  // assert title
  await expect(page).toHaveTitle("playwright by testers talt - Google Search")

  // assert text
  await expect(page.locator("[aria-label='Search']").first()).toHaveText("playwright by testers talt")

  // assert
  await expect(page.locator("[aria-label='Search']").first()).toBeEditable()
  await expect(page.locator("[aria-label='Search']").first()).toBeAttached()
  await expect(page.locator("[aria-label='Search']").first()).toBeVisible()
  await expect(page.locator("[aria-label='Search']").first()).toBeEnabled()

  //assert disable empty count
  await expect(page.locator("[aria-label='Search']").first()).not.toBeEmpty()

  await page.waitForTimeout()

});


})


// group  2
test.describe("smoking testing",() => {

    test('test 1', async ({ page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
  await page.goto("https://www.google.com/search?q=Playwright+by+Testers+Talk&rlz=1C1CHBF_en-GBPK1183&oq=playwright+by+&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMggICRAAGBYYHtIBCjE2MTIzajBqMTWoAgiwAgHxBarYtbwhXHe5&sourceid=chrome&ie=UTF-8");
   
  // assret url
  await expect(page).toHaveURL("https://www.google.com/search?q=Playwright+by+Testers+Talk&rlz=1C1CHBF_en-GBPK1183&oq=playwright+by+&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMggICRAAGBYYHtIBCjE2MTIzajBqMTWoAgiwAgHxBarYtbwhXHe5&sourceid=chrome&ie=UTF-8")
  
  // assert title
  await expect(page).toHaveTitle("playwright by testers talt - Google Search")

  // assert text
  await expect(page.locator("[aria-label='Search']").first()).toHaveText("playwright by testers talt")

  // assert
  await expect(page.locator("[aria-label='Search']").first()).toBeEditable()
  await expect(page.locator("[aria-label='Search']").first()).toBeAttached()
  await expect(page.locator("[aria-label='Search']").first()).toBeVisible()
  await expect(page.locator("[aria-label='Search']").first()).toBeEnabled()

  //assert disable empty count
  await expect(page.locator("[aria-label='Search']").first()).not.toBeEmpty()

  await page.waitForTimeout()

});

test.only('test 2', async ({ page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
  await page.goto("https://www.google.com/search?q=Playwright+by+Testers+Talk&rlz=1C1CHBF_en-GBPK1183&oq=playwright+by+&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMggICRAAGBYYHtIBCjE2MTIzajBqMTWoAgiwAgHxBarYtbwhXHe5&sourceid=chrome&ie=UTF-8");
   
  // assret url
  await expect(page).toHaveURL("https://www.google.com/search?q=Playwright+by+Testers+Talk&rlz=1C1CHBF_en-GBPK1183&oq=playwright+by+&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMggICRAAGBYYHtIBCjE2MTIzajBqMTWoAgiwAgHxBarYtbwhXHe5&sourceid=chrome&ie=UTF-8")
  
  // assert title
  await expect(page).toHaveTitle("playwright by testers talt - Google Search")

  // assert text
  await expect(page.locator("[aria-label='Search']").first()).toHaveText("playwright by testers talt")

  // assert
  await expect(page.locator("[aria-label='Search']").first()).toBeEditable()
  await expect(page.locator("[aria-label='Search']").first()).toBeAttached()
  await expect(page.locator("[aria-label='Search']").first()).toBeVisible()
  await expect(page.locator("[aria-label='Search']").first()).toBeEnabled()

  //assert disable empty count
  await expect(page.locator("[aria-label='Search']").first()).not.toBeEmpty()

  await page.waitForTimeout()

});

test.skip('test 3', async ({ page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
  await page.goto("https://www.google.com/search?q=Playwright+by+Testers+Talk&rlz=1C1CHBF_en-GBPK1183&oq=playwright+by+&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMggICRAAGBYYHtIBCjE2MTIzajBqMTWoAgiwAgHxBarYtbwhXHe5&sourceid=chrome&ie=UTF-8");
   
  // assret url
  await expect(page).toHaveURL("https://www.google.com/search?q=Playwright+by+Testers+Talk&rlz=1C1CHBF_en-GBPK1183&oq=playwright+by+&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMggICRAAGBYYHtIBCjE2MTIzajBqMTWoAgiwAgHxBarYtbwhXHe5&sourceid=chrome&ie=UTF-8")
  
  // assert title
  await expect(page).toHaveTitle("playwright by testers talt - Google Search")

  // assert text
  await expect(page.locator("[aria-label='Search']").first()).toHaveText("playwright by testers talt")

  // assert
  await expect(page.locator("[aria-label='Search']").first()).toBeEditable()
  await expect(page.locator("[aria-label='Search']").first()).toBeAttached()
  await expect(page.locator("[aria-label='Search']").first()).toBeVisible()
  await expect(page.locator("[aria-label='Search']").first()).toBeEnabled()

  //assert disable empty count
  await expect(page.locator("[aria-label='Search']").first()).not.toBeEmpty()

  await page.waitForTimeout()

});

    
})
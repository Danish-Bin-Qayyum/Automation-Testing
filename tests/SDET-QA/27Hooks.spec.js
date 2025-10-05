import { test, expect } from '@playwright/test';

/*
 * Playwright supports tags and annotations that are displayed in the test report.
 * you can add your own tags and annotations at any moment,
 * but Playwright comes with a few built-in ones:
 */
/*
 * hooks to manage setup and teardown logic for tests.
 * These hooks allow you to execute specific code before or after tests or groups of tests,
 * ensuring a clean and efficient testing process.
 */

// Approch 1
test('Home Page', async ({ page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.

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
  await page.locator('#logout2').click()

  await page.waitForTimeout(5000)
  
})

/*
 * Declares a focused test. If there are some focused tests or suites,
 * all of them will be run but nothing else.
 * test.only(title, body)
 * test.only(title, details, body)
 */

test.only('Add Producte to cart Text ', async ({ page }) => {

  await page.goto("https://www.demoblaze.com/index.html")

  //login
  await page.locator("//a[@id='login2']").click()
  await page.locator("//input[@id='loginusername']").fill("Danish Qayyum")
  await page.locator("//input[@id='loginpassword']").fill("danishqayyum123")
  await page.locator("//button[normalize-space()='Log in']").click()

  //Add to the card 
  await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
  await page.locator("//a[normalize-space()='Add to cart']").click()

  page.on("dialog",async dialog=>{
    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
  })
  //expect(products).toHaveLength(9)


  // logout
  await page.locator('#logout2').click()

  await page.waitForTimeout(5000)
  
})


// Approch 2
let page;

test.beforeEach(async ({browser})=>{
  page=await browser.newPage();
  await page.goto("https://www.demoblaze.com/index.html")

  //login
  await page.locator("//a[@id='login2']").click()
  await page.locator("//input[@id='loginusername']").fill("Danish Qayyum")
  await page.locator("//input[@id='loginpassword']").fill("danishqayyum123")
  await page.locator("//button[normalize-space()='Log in']").click()
    
  })

test.afterEach(async()=>{
    await page.locator('#logout2').click()
  })

test('Home Pag', async () => {
  //Home Page
  const products=await page.$$(".hrefch")
  console.log(products);
  await page.waitForTimeout(5000)
})

test('Add Producte to cart Tex', async () => {
  //Add to the card 
  await page.locator("//a[normalize-space()='Nokia lumia 1520']").click()
  await page.locator("//a[normalize-space()='Add to cart']").click()

  page.on("dialog",async dialog=>{
    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
  })
  await page.waitForTimeout(5000)
})
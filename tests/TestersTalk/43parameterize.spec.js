import { test, expect } from '@playwright/test';

const testParameters = ['playwright by tester talt','cypress by tester talt','selinium by tester talt']

// loop for 
 for ( const searchKeyword of testParameters) {
    
    
test('parameterize test in playwright ${searchKeyword}', async ({ page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
  await page.goto("https://www.google.com/");

  // search with keyword
  await page.locator("Search").click()
  await page.locator("Search").fill(searchKeyword)
  await page.locator("Search").press("Enter")

  await page.waitForTimeout(5000)

});

}  

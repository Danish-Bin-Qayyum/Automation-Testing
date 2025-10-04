
import { test, expect } from '@playwright/test';

// how to use built in locators in you test
test('has title', async ({ page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   
    //step 2 : page.getByAltText() to locate an element, usually image, by its text alternative.
    const logo = await page.getByAltText('OrangeHRM Logo')//compy the alt attribut text
    //console.log(logo);

    //step 3 : page.getByPlaceholder() to locate an input by placeholder.
    await page.getByPlaceholder('Username').fill('Admin')
    //step 4 : page.getByPlaceholder() to locate an input by placeholder.
    await page.getByPlaceholder('Password').fill('admin123')
    //step 5 : click the element 
    await page.getByRole('button',{type:'submit'}).click()
   
   //await expect(await page.getByText('')).toBeVisible()

});
``

import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //page.getByAltText() to locate an element, usually image, by its text alternative.
    const logo = await page.getByAltText('OrangeHRM Logo')//compy the alt attribut text
    //console.log(logo);

   //page.getByPlaceholder() to locate an input by placeholder.
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    await page.getByRole('button',{type:'submit'}).click()

   //await expect(await page.getByText('')).toBeVisible()

});
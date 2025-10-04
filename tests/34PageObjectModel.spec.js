import { test, expect } from '@playwright/test';
//import {LoginPage} from '../page/LoginPage';

test('basic assertion example', async ({ page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
  await page.goto('https://www.demoblaze.com/index.html');

  // longin
  const login=new LoginPage(page);
  await login.gotoLoginPage();
  await login.login('')
  await page.waitForTimeout()

  // Home
  const home = new HomePage(page)
  await home.addProductToCart("")
  await page.waitForTimeout("")
  await home.gotoCart();

  //cart
  const cart=new CartPage(page)
  await page.waitForTimeout()
  const status=await cart.checkProductInCart()
  expect(await status).toBe(true)



});

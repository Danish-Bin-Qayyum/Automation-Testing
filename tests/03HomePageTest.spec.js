const {test , expect} = require('@playwright/test')// importe here tow modules

test('HomePageTest',async ({page})=>{
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   // that are designed to run automatically at the execution" (4.3)
   await page.goto('https://www.demoblaze.com/index.html' );

   //step 2 : return the  title of the page 
   const pageTitle=await page.title();

   console.log('Page title is :',pageTitle);

   //step 3 : expect the condition this page have title (40)
   await expect(page).toHaveTitle('STORE');

   //step 4 : return the URL of page
   const pageURL= await page.url();

   console.log('Page URL is :',pageURL);

   //step 5 : expect the condition this page have URL (6)
   await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

   //step 6 :  close the page (9)
   await page.close(); 

   //step 7 : After Hooks (59)
})

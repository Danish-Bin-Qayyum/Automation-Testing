const {test , expect} = require('@playwright/test')// importe here tow modules

test('HomePageTest',async ({page})=>{
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
    await page.goto("https://ui.vision/demo/webtest/frames/");

   const allframes=await page.frames()
   console.log("number of frames-----  ",allframes.length);

   //approach 1: using name or url 
   //const var=await page.frame('')
   //const frame1=awaite page.frame({})
   //await frame1.fill([])

   //approach 2 using frame locator
   const inputbox=await page.frameLocator().locator()
    
})  
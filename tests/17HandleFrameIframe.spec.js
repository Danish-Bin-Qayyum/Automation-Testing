const {test , expect} = require('@playwright/test')// importe here tow modules

test('HomePageTest',async ({page})=>{
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
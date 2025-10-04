const {test,exept} =require('@playwright/test');

// how to locate multiple elements of the page in playwright
test('locateMultipleElemente',async({page})=>{
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
    await page.goto('https://www.demoblaze.com/index.html')
    //step 2 : return the  list of elements
    const links = await page.locator('a')
    //step 3 : loop for print element context
    for(const link of links ){

    const textContent =  await link.textContent()

      console.log(textContent);
    }

    /*page.waitForSelector("//div[@id='tbodyid']//h4/a");

    const products = await page.$$("//div[@id='tbodyid']//h4/a")

    for(const product of products ){

    const productname =  await product.textContent()

    console.log(productname);

    }*/
})
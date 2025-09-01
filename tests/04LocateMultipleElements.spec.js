const {test,exept} =require('@playwright/test');

test('locateMultipleElemente',async({page})=>{

    //step 1 : Navigate the page by link
    await page.goto('https://www.demoblaze.com/index.html')
    //step 2 : return the  list of elements
    const links = await page.$$('a')
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
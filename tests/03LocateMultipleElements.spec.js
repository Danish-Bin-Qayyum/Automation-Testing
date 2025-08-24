const {test,exept} =require('@playwright/test');

test('locateMultipleElemente',async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    /*const links = await page.$$('a')

    for(const link of links ){

      const textContent =  await link.textContent()

      console.log(textContent);

    }*/
       //page.waitForSelector("//div[@id='tbodyid']//h4/a");
        const products = await page.$$("//div[@id='tbodyid']//h4/a")

    for(const product of products ){

      const productname =  await product.textContent()

      console.log(productname);

    }
})
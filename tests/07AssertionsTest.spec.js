
const{test ,expect}=require('@playwright/test')

/* 
 * what is assertion  methods
 */

/*
 * Playwright includes test assertions in the form of expect function.
 * To make an assertion, call expect(value) and choose a matcher that reflects the expectation.
 * There are many generic matchers like toEqual, toContain, toBeTruthy
 * that can be used to assert any conditions.
 */ 
test('AssertionTest',async({page})=>{
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')

    //1) await expect(page).toHaveURL()	Page has a URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')

    //2) await expect(page).toHaveTitle()	Page has a title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')
    
    //3) await expect(locator).toBeVisible()	Element is visible
    const logoElement=await page.locator().toBeEnabled()
    await expect(logoElement).toBeDisabled()

    //4) await expect(locator).toBeEnabled()	Element is enabled
    const searchStoreBox=await page.locator('')
    await expect(sessionStorage).toBeEnabled()

    //5) await expect(locator).toBeChecked()	Checkbox is checked
    const maleRadioBuuton=await page.locator('')
    await maleRadioBuuton.click() //  sellect radio button
    await expect(maleRadioBuuton).toBeChecked()

    //chect box
    const mewsletterCheckbox=await page.locator('')
    await expect(mewsletterCheckbox).toBeChecked()

    //6) await expect(locator).toHaveAttribute()	Element has a DOM attribute
    const regButton=await page.locator('')
    await expect(regButton).toHaveAttribute('')

    //7) await expect(locator).toHaveText()	Element matches text
    await expect(await page.locator('')).toHaveText('')// full text

    //8) await expect(locator).toContainText()	Element contains text
    await expect(await page.locator('')).toContainText('')//partial text

    //9) await expect(locator).toHaveValue()	Input has a value  
    
    const emailInput=await page.locator('')
    await emailInput.fill('')
    await expect(emailInput).toHaveValue('')

    //10)await expect(locator).toHaveCount()	List has exact number of children
    const options= await page.locator('')
    await expect().toHaveCount()

})
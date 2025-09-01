/*await expect(locator).toBeAttached()	Element is attached
await expect(locator).toBeChecked()	Checkbox is checked
await expect(locator).toBeDisabled()	Element is disabled
await expect(locator).toBeEditable()	Element is editable
await expect(locator).toBeEmpty()	Container is empty
await expect(locator).toBeEnabled()	Element is enabled
await expect(locator).toBeFocused()	Element is focused
await expect(locator).toBeHidden()	Element is not visible
await expect(locator).toBeInViewport()	Element intersects viewport
await expect(locator).toBeVisible()	Element is visible
await expect(locator).toContainText()	Element contains text
await expect(locator).toContainClass()	Element has specified CSS classes
await expect(locator).toHaveAccessibleDescription()	Element has a matching accessible description
await expect(locator).toHaveAccessibleName()	Element has a matching accessible name
await expect(locator).toHaveAttribute()	Element has a DOM attribute
await expect(locator).toHaveClass()	Element has specified CSS class property
await expect(locator).toHaveCount()	List has exact number of children
await expect(locator).toHaveCSS()	Element has CSS property
await expect(locator).toHaveId()	Element has an ID
await expect(locator).toHaveJSProperty()	Element has a JavaScript property
await expect(locator).toHaveRole()	Element has a specific ARIA role
await expect(locator).toHaveScreenshot()	Element has a screenshot
await expect(locator).toHaveText()	Element matches text
await expect(locator).toHaveValue()	Input has a value
await expect(locator).toHaveValues()	Select has options selected
await expect(locator).toMatchAriaSnapshot()	Element matches the Aria snapshot
await expect(page).toHaveScreenshot()	Page has a screenshot
await expect(page).toHaveTitle()	Page has a title
await expect(page).toHaveURL()	Page has a URL
await expect(response).toBeOK()	Response has an OK status*/

const{test ,expect}=require('@playwright/test')

test('AssertionTest',async({page})=>{

    //open app url
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
import { test, expect, chromium } from '@playwright/test';

/*
 * Multiple pages
 * Each browser context can host multiple pages (tabs).
 * Each page behaves like a focused, active page.
 * Bringing the page to front is not required.
 * Pages inside a context respect context-level emulation, like viewport sizes,
 * custom network routes or browser locale.
 */ 

/*
 * BrowserContexts provide a way to operate multiple independent browser sessions.
 * If a page opens another page, e.g. with a window.open call,
 * the popup will belong to the parent page's browser context.
 */

test('Handle Pages/Window', async () => {

    const browser=await chromium.launch()
    const context=await browser.newContext()

    const page1=await context.newPage()
    const page2=await context.newPage()

    const allPage=context.pages()
    console.log("no of pages created",allPage.length);

    await page1.goto("")
    await expect(page1).toHaveTitle("OrangeHRM")

    await page1.goto("")
    await expect(page2).toHaveTitle("")


});

test.only('Handle Pages/Windows', async () => {

    const browser=await chromium.launch()
    const context=await browser.newContext()

     const page1=await context.newPage()
     await page1.goto("")
     await expect(page1).toHaveTitle()

    const pagePromise=context.waitForEvent('page') 
    await page1.locator('').click()

    const newPage= await pagePromise
    await expect(newPage).toHaveTitle()

    await page1.waitForTimeout()
    await newPage.waitForTimeout()

    await browser.close()


});

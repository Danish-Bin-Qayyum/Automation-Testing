import { test, expect } from '@playwright/test';

test('basic assertion example', async ({ page }) => {
   //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
  await page.goto('https://playwright.dev/');

  // Assertion: Check that the title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);

  // Assertion: Check that a button is visible
  const getStarted = page.locator('text=Get Started');
  await expect(getStarted).toBeVisible();

  // Assertion: Check that a URL is correct
  await expect(page).toHaveURL('https://playwright.dev/');
});

/*
 * how to handle different type date  Picker calendare
 */ 




/*
// in this assertion the retries will apply automaticall
await expect(locator).toBeAttached()	Element is attached
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
await expect(response).toBeOK()	Response has an OK status
*/

/*
 * // in this assertion the retries will apply

expect(value).toBe()	Value is the same
expect(value).toBeCloseTo()	Number is approximately equal
expect(value).toBeDefined()	Value is not undefined
expect(value).toBeFalsy()	Value is falsy, e.g. false, 0, null, etc.
expect(value).toBeGreaterThan()	Number is more than
expect(value).toBeGreaterThanOrEqual()	Number is more than or equal
expect(value).toBeInstanceOf()	Object is an instance of a class
expect(value).toBeLessThan()	Number is less than
expect(value).toBeLessThanOrEqual()	Number is less than or equal
expect(value).toBeNaN()	Value is NaN
expect(value).toBeNull()	Value is null
expect(value).toBeTruthy()	Value is truthy, i.e. not false, 0, null, etc.
expect(value).toBeUndefined()	Value is undefined
expect(value).toContain()	String contains a substring
expect(value).toContain()	Array or set contains an element
expect(value).toContainEqual()	Array or set contains a similar element
expect(value).toEqual()	Value is similar - deep equality and pattern matching
expect(value).toHaveLength()	Array or string has length
expect(value).toHaveProperty()	Object has a property
expect(value).toMatch()	String matches a regular expression
expect(value).toMatchObject()	Object contains specified properties
expect(value).toStrictEqual()	Value is similar, including property types
expect(value).toThrow()	Function throws an error
expect(value).any()	Matches any instance of a class/primitive
expect(value).anything()	Matches anything
expect(value).arrayContaining()	Array contains specific elements
expect(value).closeTo()	Number is approximately equal
expect(value).objectContaining()	Object contains specific properties
expect(value).stringContaining()	String contains a substring
expect(value).stringMatching()	String matches a regular expression
 */


/*
* page.getByRole() to locate by explicit and implicit accessibility attributes.

* page.getByText() to locate by text content.

* page.getByLabel() to locate a form control by associated label's text.

* page.getByPlaceholder() to locate an input by placeholder.

* page.getByAltText() to locate an element, usually image, by its text alternative.

* page.getByTitle() to locate an element by its title attribute.

* page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/


/*

Fixture  	Type        	       Description

page     	Page  	             Isolated page for this test run.
context   	BrowserContext        Isolated context for this test run. The page fixture belongs to this context as well. Learn how to configure context.
browser  	Browser	             Browsers are shared across tests to optimize resources. Learn how to configure browsers.
browserName	string	             The name of the browser currently running the test. Either chromium, firefox or webkit.
request	   APIRequestContext     Isolated APIRequestContext instance for this test run

 */





/*
 * | Method                                         | Description                                               |
 * | ---------------------------------------------- | --------------------------------------------------------- |
 * | `mouse.move(x, y[, options])`                  | Moves the mouse to the specified `(x, y)` coordinates.    |
 * | `mouse.click(x, y[, options])`                 | Moves the mouse to `(x, y)` and clicks (press + release). | 
 * | `mouse.dblclick(x, y[, options])`              | Double-clicks at the given position.                      |
 * | `mouse.down([options])`                        | Presses a mouse button down (without releasing it).       |
 * | `mouse.up([options])`                          | Releases a previously pressed mouse button.               |
 * | `mouse.wheel(deltaX, deltaY)`                  | Scrolls the mouse wheel by the given delta values.        |
 * | `mouse.dragAndDrop(source, target[, options])` | Drags from one selector to another (high-level API).      |
 * | `mouse.drag(start, target[, options])`         | Starts a drag operation (lower-level than `dragAndDrop`). |
 * | `mouse.drop(target[, options])`                | Drops at the target (to be used with `drag()`).           |
 */




/*
 * | Method                                  | Description                                                                      |
 * | --------------------------------------- | -------------------------------------------------------------------------------- |
 * | `keyboard.type(text[, options])`        | Types the full text, one character at a time (with key events).                  |
 * | `keyboard.press(key[, options])`        | Presses a single key (keydown + keyup). Optionally holds the key for a delay.    |
 * | `keyboard.down(key[, options])`         | Simulates pressing a key down (doesn’t release it).                              |
 * | `keyboard.up(key)`                      | Simulates releasing a key.                                                       |
 * | `keyboard.insertText(text)`             | Inserts text directly into the page (no key events like keydown/keyup).          |
 * | `keyboard.sendCharacter(char)`          | Sends a character without pressing a physical key (fires keypress/input events). |
 * | `keyboard.dispatchEvent(keyboardEvent)` | [Advanced] Manually dispatches a full keyboard event object. (Less common)       |
 */ 


/*
 * | Method                                         | Description                                               |
 * | ---------------------------------------------- | --------------------------------------------------------- |
 * | `mouse.move(x, y[, options])`                  | Moves the mouse to the specified `(x, y)` coordinates.    |
 * | `mouse.click(x, y[, options])`                 | Moves the mouse to `(x, y)` and clicks (press + release). | 
 * | `mouse.dblclick(x, y[, options])`              | Double-clicks at the given position.                      |
 * | `mouse.down([options])`                        | Presses a mouse button down (without releasing it).       |
 * | `mouse.up([options])`                          | Releases a previously pressed mouse button.               |
 * | `mouse.wheel(deltaX, deltaY)`                  | Scrolls the mouse wheel by the given delta values.        |
 * | `mouse.dragAndDrop(source, target[, options])` | Drags from one selector to another (high-level API).      |
 * | `mouse.drag(start, target[, options])`         | Starts a drag operation (lower-level than `dragAndDrop`). |
 * | `mouse.drop(target[, options])`                | Drops at the target (to be used with `drag()`).           |
 */

/*
 * | Method                                         | Description                                               |
 * | ---------------------------------------------- | --------------------------------------------------------- |
 * | `mouse.move(x, y[, options])`                  | Moves the mouse to the specified `(x, y)` coordinates.    |
 * | `mouse.click(x, y[, options])`                 | Moves the mouse to `(x, y)` and clicks (press + release). | 
 * | `mouse.dblclick(x, y[, options])`              | Double-clicks at the given position.                      |
 * | `mouse.down([options])`                        | Presses a mouse button down (without releasing it).       |
 * | `mouse.up([options])`                          | Releases a previously pressed mouse button.               |
 * | `mouse.wheel(deltaX, deltaY)`                  | Scrolls the mouse wheel by the given delta values.        |
 * | `mouse.dragAndDrop(source, target[, options])` | Drags from one selector to another (high-level API).      |
 * | `mouse.drag(start, target[, options])`         | Starts a drag operation (lower-level than `dragAndDrop`). |
 * | `mouse.drop(target[, options])`                | Drops at the target (to be used with `drag()`).           |
 */


/*
 * | Method                                         | Description                                               |
 * | ---------------------------------------------- | --------------------------------------------------------- |
 * | `mouse.move(x, y[, options])`                  | Moves the mouse to the specified `(x, y)` coordinates.    |
 * | `mouse.click(x, y[, options])`                 | Moves the mouse to `(x, y)` and clicks (press + release). | 
 * | `mouse.dblclick(x, y[, options])`              | Double-clicks at the given position.                      |
 * | `mouse.down([options])`                        | Presses a mouse button down (without releasing it).       |
 * | `mouse.up([options])`                          | Releases a previously pressed mouse button.               |
 * | `mouse.wheel(deltaX, deltaY)`                  | Scrolls the mouse wheel by the given delta values.        |
 * | `mouse.dragAndDrop(source, target[, options])` | Drags from one selector to another (high-level API).      |
 * | `mouse.drag(start, target[, options])`         | Starts a drag operation (lower-level than `dragAndDrop`). |
 * | `mouse.drop(target[, options])`                | Drops at the target (to be used with `drag()`).           |
 */



/*webServer: {
  command: 'npm run start',
  url: 'http://localhost:3000',
  reuseExistingServer: !process.env.CI,
  timeout: 60 * 1000, // wait up to 60 seconds
}
*/



/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/d                    ocs/test-configuration
 */
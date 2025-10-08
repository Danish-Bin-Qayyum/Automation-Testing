import { test, expect } from '@playwright/test';

/*
 * You can select input files for upload using the locator.setInputFiles() method.
 * It expects first argument to point to an input element with the type "file".
 * Multiple files can be passed in the array.
 * If some of the file paths are relative, they are resolved relative to the current working directory.
 * Empty array clears the selected files.
 */
test('singal files', async ({ page }) => {
  //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
  await page.goto("https://testautomationpractice.blogspot.com/")

  //await page.waitForSelector("//button[@class='inline-flex items-center justify-center gap-1 rounded-3xl px-3 py-2 text-sm font-normal text-trusted-600 border bg-primary-400 border-primary-400 hover:bg-trusted-200 hover:border-trusted-200 w-")
  await page.locator("//input[@id='singleFileInput']").setInputFiles("End-To-End-Testing\textFile.pdf")

  //Waits for the given timeout in milliseconds.
  await page.waitForTimeout(5000)
  
})

test('multiple files', async ({ page }) => {
  //step 1 : Before Hooks (1.1) ""hooks" are specific functions or blocks of code 
   //  that are designed to run automatically at the execution"
   
   //  Returns the main resource response. In case of multiple redirects,
   //  the navigation will resolve with the first non-redirect response.
  await page.goto("https://testautomationpractice.blogspot.com/")

  //await page.waitForSelector("//button[@class='inline-flex items-center justify-center gap-1 rounded-3xl px-3 py-2 text-sm font-normal text-trusted-600 border bg-primary-400 border-primary-400 hover:bg-trusted-200 hover:border-trusted-200 w-")
  await page.locator("//input[@id='singleFileInput']")

  // Select multiple files
  await page.getByLabel('Upload files').setInputFiles([ path.join(__dirname, 'file1.txt'),path.join(__dirname, 'file2.txt')  ]);

  // Remove all the selected files
  await page.getByLabel('Upload file').setInputFiles([]);
  
  //Waits for the given timeout in milliseconds.
  await page.waitForTimeout(5000)
})


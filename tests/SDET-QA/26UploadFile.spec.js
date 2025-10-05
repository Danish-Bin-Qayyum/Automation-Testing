import { test, expect } from '@playwright/test';

/*
 * You can select input files for upload using the locator.setInputFiles() method.
 * It expects first argument to point to an input element with the type "file".
 * Multiple files can be passed in the array.
 * If some of the file paths are relative, they are resolved relative to the current working directory.
 * Empty array clears the selected files.
 */

/*
// Select one file
await page.getByLabel('Upload file').setInputFiles(path.join(__dirname, 'myfile.pdf'));

// Select multiple files
await page.getByLabel('Upload files').setInputFiles([
  path.join(__dirname, 'file1.txt'),
  path.join(__dirname, 'file2.txt'),
]);

// Select a directory
await page.getByLabel('Upload directory').setInputFiles(path.join(__dirname, 'mydir'));

// Remove all the selected files
await page.getByLabel('Upload file').setInputFiles([]);

// Upload buffer from memory
await page.getByLabel('Upload file').setInputFiles({
  name: 'file.txt',
  mimeType: 'text/plain',
  buffer: Buffer.from('this is test')
});
*/ 

test('singal files', async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/")

  //await page.waitForSelector("//button[@class='inline-flex items-center justify-center gap-1 rounded-3xl px-3 py-2 text-sm font-normal text-trusted-600 border bg-primary-400 border-primary-400 hover:bg-trusted-200 hover:border-trusted-200 w-")
  await page.locator("//input[@id='singleFileInput']").setInputFiles("End-To-End-Testing\textFile.pdf")

  await page.waitForTimeout(5000)
  

})

/*test('multiple files', async ({ page }) => {

  await page.goto("https://www.foundit.in/seeker/profile?application_source=organic")

  await page.waitForSelector("//button[normalize-space()='Upload Single File']").click()
  //a.setInputFiles('tests\textFile.pdf')

  await page.waitForTimeout(5000)
  

})*/
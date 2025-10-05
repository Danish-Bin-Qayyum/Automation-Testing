import { test, expect } from '@playwright/test';
/*
 * Playwright supports tags and annotations that are displayed in the test report.
 * you can add your own tags and annotations at any moment,
 * but Playwright comes with a few built-in ones:
 */

/*
 * You can group tests to give them a logical name or to scope before/after hooks to the group.
 */

// Group 1
/*
 * You can declare a group of tests with a title.
 * The title will be visible in the test report as a part of each test's title.
 */
test.describe('Group 1',() => {

  test('Test 1', async ({ page }) => {
  console.log("this is my test....1");
});

test('Test 2', async ({ page }) => {
  console.log("this is my test....2");
});
});

// Group 2
/*You can declare a group of tests with a title.
 * The title will be visible in the test report as a part of each test's title.
 */
test.describe('Group 2',() => {

  test('Test 3',async({page}) => {
  console.log("this is my test....3");
});

test('Test 4', async ({ page }) => {
  console.log("this is my test....4");
});
});

// Hooks
/*Declares a beforeAll hook that is executed once per worker process before all tests.*/ 
test.beforeAll(async()=>{
  console.log("this is beforeAll Hook......");
})
/*Declares an afterAll hook that is executed once per worker after all tests.*/ 
test.afterAll(async()=>{
  console.log("this is afterall Hook......");
})
/*Declares a beforeEach hook that is executed before each test.*/
test.beforeEach(async()=>{
  console.log("this is beforEach Hook......");
})
/*Declares an afterEach hook that is executed after each test.*/ 
test.afterEach(async()=>{
  console.log("this is aftereach Hook......");
})










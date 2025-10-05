import { test, expect } from '@playwright/test';

/*
 * Playwright supports tags and annotations that are displayed in the test report.
 * You can add your own tags and annotations at any moment
 */

/* 
//Playwright Test Annotations (Hooks & Modifiers)

***Test Definition
test() — Define a test case.

***Grouping Tests
test.describe() — Group related tests together.

***Lifecycle Hooks
test.beforeAll() — Run once before all tests.
test.afterAll() — Run once after all tests.
test.beforeEach() — Run before each test.
test.afterEach() — Run after each test.

***Skipping / Filtering Tests
test.skip() — Skip a test or a group.
test.only() — Run only this test or group.
test.fixme() — Mark test as needing a fix (skipped but reported).

***Configuration
test.use() — Set specific options for a test (like browser, viewport, storage state, etc).

***Step Logging
test.step() — Add named steps inside a test (useful for logs/debugging).
*/ 

// only
/*test.only("test1", async ({ page }) => {
    console.log("this is test 1");
});*/

// skip
/*test.skip('test2', async ({ page }) => {
    console.log("this is test 2");
});*/

// skip the test in base of condition
/*test('test3', async ({ page }) => {
    console.log("this is test 3");
    if (browserName==='chromium') {
        test.skip()
    }
});*/

//fixme
/*test("test4", async ({ page }) => {
    test.fixme()
    console.log("this is test 4");
});*/

// fail

/*test('test5', async ({ page }) => {
    test.fail()
    console.log("this is test 5...");
    expect(1).toBe(1)
});*/

// 
/*test('test6', async ({ page }) => {
    console.log("this is test 6");
    if (browserName==='chromium') {
        test.fail()
    }
});*/



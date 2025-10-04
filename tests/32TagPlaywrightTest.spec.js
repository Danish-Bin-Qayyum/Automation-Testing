import { test, expect } from '@playwright/test';

/*
 * Sometimes you want to tag your tests as @fast or @slow,
 * and then filter by tag in the test report.
 * Or you might want to only run tests that have a certain tag.
 */

/*
 * Goal	Command
 * Run tests with tag @sanity	npx playwright test --grep "@sanity"
 * Run tests with tag @smoke	npx playwright test --grep "@smoke"
 * Run tests with both @smoke @login	npx playwright test --grep "@smoke.*@login"
 * Run tests with either tag	`npx playwright test --grep "@sanity
 * Exclude tests with tag @slow	npx playwright test --grep-invert "@slow"
 */ 

test("test1@sanit", async ({ page }) => {
    console.log("this is test 1");
});

test('test2@sanit', async ({ page }) => {
    console.log("this is test 2");
});

test('test32reg', async ({ page }) => {
    console.log("this is test 3");
});

test('test42reg', async ({ page }) => {
    console.log("this is test 4");
});

test('test@sanity@reg', async ({ page }) => {
    console.log("this is test 5");
});



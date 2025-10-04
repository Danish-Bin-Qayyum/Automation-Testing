/**********  Qurstios **********/
/*
 * what is globle pattern ?
 */

/*
* testDir, 
* testMatch,
* testIgnore, 
* timeout, 
* globalTimeout, 
* forbidOnly, 
* fullyParallel, 
* retries, 
* workers, 
* reporter, (The reporter option controls how Playwright outputs test results.)
* outputDir, (outputDir is a configuration option that specifies the directory where Playwright should save test artifacts during the test execution process.)
* globalTeardown,  ?
* projects, (projects is an array of configurations, each describing a different test setup or environment.)
* expect, (The expect config inside playwright.config.ts lets you customize how assertions work by setting)
* grep, (grep lets you run only tests whose titles match a given pattern)
* grepInvert, (grepInvert excludes (skips) tests matching a pattern.)
* maxFailures, (maxFailures is a configuration option that limits how many test failures are allowed before Playwright stops running any more tests.)
* repeatEach, (repeatEach specifies how many times each test should be run consecutively.)
* reportSlowTests, (Helps you identify slow tests which might need optimization.)
* quiet, (When set to true, Playwright suppresses most of the standard output, making the test run less verbose.)
* metadata, (metadata is a way to attach custom key-value information to your test run or project.)
* tsconfig, (that tells the TypeScript compiler how to compile your TypeScript code.)
* build, (The build option is a string that lets you specify the build version or identifier of your application under test.)
* captureGitInfo (captureGitInfo is a boolean option that controls whether Playwright captures Git repository information during the test run.)
*/ 


// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // 1)// Look for test files in the "tests" directory, relative to this configuration file.
  testDir: './tests',
 

  // 2) /* Run tests in files in parallel */
  fullyParallel: true,
  

  // 3)  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
 

  // 4) /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,


  // 5)/* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  

  // 6)/* Reporter to use. See https://playwright.dev/docs/test-
  // reporters */
  reporter: 'html',
  
/*
  use: {
  headless: true,
  baseURL: 'http://localhost:3000',
  viewport: { width: 1280, height: 720 },
  actionTimeout: 10000,
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'on-first-retry',
  locale: 'en-US',?
  timezoneId: 'America/New_York',
  permissions: ['geolocation'],
  geolocation: { latitude: 40.7128, longitude: -74.0060 },
}
*/ 

  // 7)/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    screenshots:'on',
    video:"on"
  },
  

/*projects: [
  {
    name: 'Desktop Chrome',
    use: { ...devices['Desktop Chrome'] },
  },
  /*{
    name: 'Desktop Firefox',
    use: { ...devices['Desktop Firefox'] },
  },
  {
    name: 'Mobile Safari',
    use: { ...devices['iPhone 12'] },
  },
]*/

  // 8)/* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

   /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },*/

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
 

  // 9) /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

});



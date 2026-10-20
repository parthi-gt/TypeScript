// applitools-visual.spec.ts
import { test } from '@playwright/test';
import { Eyes, Target, VisualGridRunner, BatchInfo } from '@applitools/eyes-playwright';

// Step 1: Create a runner - VisualGridRunner sends checks to Applitools' cloud
// so it can render across many browsers/devices without you owning them.
const runner = new VisualGridRunner({ testConcurrency: 5 });
const batch = new BatchInfo('SauceDemo Visual Regression Suite');

let eyes: Eyes;

test.describe('AI Visual Testing - SauceDemo with Applitools', () => {

  test.beforeEach(async ({ page }) => {
    // Step 2: Initialize Eyes and attach it to the Playwright page
    eyes = new Eyes(runner);
    eyes.setBatch(batch);
    eyes.setApiKey(process.env.APPLITOOLS_API_KEY!);

    await eyes.open(
      page,
      'SauceDemo App',          // App name shown in dashboard
      test.info().title,        // Test name shown in dashboard
      { width: 1280, height: 800 } // Baseline viewport size
    );
  });

  test('should visually validate the login page with AI', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    // Step 3: AI-powered visual checkpoint - replaces manual pixel diffing
    await eyes.check('Login Page', Target.window().fully());
  });

  test('should visually validate the inventory page after login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Ignore the product images region since prices/images rotate in demo data
    await eyes.check(
      'Inventory Page',
      Target.window()
        .fully()
        .ignoreRegions(page.locator('.inventory_item_price'))
    );
  });

  test.afterEach(async () => {
    // Step 4: Close Eyes and report results (pass/fail/new baseline) to the dashboard
    await eyes.closeAsync();
  });

  test.afterAll(async () => {
    // Step 5: Wait for all cloud-rendered checks to finish and print a dashboard link
    const results = await runner.getAllTestResults();
    console.log('Applitools Dashboard results:', results);
  });

});
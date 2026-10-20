const { test, expect } = require('@playwright/test');
test('Handle a login failure gracefully using try/catch', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
try {
await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('WRONG_PASSWORD_ON_PURPOSE');
await page.getByRole('button', { name: 'Login' }).click();
// We EXPECT to land on the dashboard — but with a wrong password, we won't
await expect(page).toHaveURL(/dashboard/, { timeout: 5000 });
console.log('Login succeeded (unexpected!)');
} catch (error) {
// Because the password was wrong, the above will fail — we catch it here calmly
console.log('Login failed as expected. Caught the error safely:', error.message);
}
// The script keeps running normally after this — it did NOT crash
console.log('Test finished running, without the whole script crashing.');
});
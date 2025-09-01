import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vulms.vu.edu.pk/');
  await page.getByRole('textbox', { name: 'Student ID' }).click();
  await page.getByRole('textbox', { name: 'Student ID' }).fill('bc250200338');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Danish.q123');
  await page.locator('#show_hide_password').getByRole('link').click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Danish.q123');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Password' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Password' }).fill('Danish..q123');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForTimeout(10000)
  await page.locator('#m_aside_left_minimize_toggle').click();
  await page.locator('.m-stack__item.m-stack__item--middle.m-brand__tools').click();
  await page.getByRole('link', { name: 'BC250200338' }).click();
  await page.waitForTimeout(10000)
  await page.getByRole('link', { name: 'Logout' }).click();
});
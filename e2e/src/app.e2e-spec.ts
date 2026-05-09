import { expect, test } from '@playwright/test';

test.describe('Tour of Heroes', () => {
  test('renders the shell and navigates through the hero views', async ({ page }) => {
    const browserErrors: string[] = [];

    page.on('console', message => {
      if (message.type() === 'error') {
        browserErrors.push(message.text());
      }
    });
    page.on('pageerror', error => browserErrors.push(error.message));

    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'Tour of Heroes' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Heroes' })).toBeVisible();

    await page.getByRole('link', { name: 'Dashboard' }).click();
    await expect(page).toHaveURL(/\/dashboard$/);
    await expect(page.getByRole('heading', { name: 'Top Heroes' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Narco' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Magneta' })).toBeVisible();

    await page.getByRole('link', { name: 'Heroes' }).click();
    await expect(page).toHaveURL(/\/heroes$/);
    await expect(page.getByRole('heading', { name: 'My Heroes' })).toBeVisible();
    await expect(page.locator('.heroes')).toContainText('Dr Nice');
    await expect(page.locator('.heroes')).toContainText('Narco');

    expect(browserErrors).toEqual([]);
  });
});

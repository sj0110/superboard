import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Superboard/i)
  })

  test('should display campaign title', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Defx')).toBeVisible()
  })

  test('should have working search input', async ({ page }) => {
    await page.goto('/')
    const searchInput = page.getByLabelText('Search Quests')
    await expect(searchInput).toBeVisible()
    await searchInput.fill('test quest')
    await expect(searchInput).toHaveValue('test quest')
  })
})


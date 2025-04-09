import { test, expect } from '@playwright/test'
import { existingUsers } from '../../test-setup/localstorage.setup'

test.describe('login form tests', () => {
  test('logging in works with existing account', async ({ page }) => {

    // Navigate to login page
    await page.goto('http://localhost:8080/login')

    // Get test user credentials from setup data
    const existingUser = existingUsers[0]

    // Fill in login form
    await page.getByLabel('email').fill(existingUser.email)
    await page.getByLabel('Password', { exact: true}).fill(existingUser.password)

    // Submit the login form
    await page.getByRole('button', {name: 'Login'}).click()

    // Verify successful login
    await expect(page.getByText('Log out')).toBeVisible()
  })
})

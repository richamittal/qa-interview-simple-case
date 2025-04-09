import { test, expect } from '@playwright/test'

test.describe('signup form tests', () => {
    test('sign up user happy path', async ({ page }) => {

        // Navigate to signup page
        await page.goto('http://localhost:8080/signup')

        // User credentials for this test run
        const newUser = {
            firstName: 'testFirstName1',
            lastName: 'testLastName1',
            email: 'testsignup1@mail.com',
            password: 'testPassword!'
        }

        // Fill in signup form
        await page.getByLabel('First name').fill(newUser.firstName)
        await page.getByLabel('Last name').fill(newUser.lastName)
        await page.getByLabel('email').fill(newUser.email)
        await page.getByLabel('Password', { exact: true}).fill(newUser.password)

        // Submit the signup form
        await page.getByRole('button', {name: 'Submit'}).click()

        // Verify successful signup
        await expect(page.getByText(`Welcome ${newUser.firstName} ${newUser.lastName}`)).toBeVisible()
        await expect(page.getByText('Log out')).toBeVisible()
    })
})

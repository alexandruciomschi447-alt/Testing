import { test, expect } from '@playwright/test';

test('LOGIN EXERCISE', async  ({page}) => {

    const username = "alexandruciomschi447@gmail.com";
    const password = "Sasa1212";

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByPlaceholder("email@example.com").fill(username);
    await page.getByPlaceholder("enter your passsword").fill(password);
    await page.locator("#login").click();
    await expect(page.locator('body')).toBeVisible();
    await page.getByRole('button', {name: ' Add To Cart'}).nth(2).click();
    await page.locator('.btn.btn-custom').nth(2).click();
    await page.getByRole('button', {name: "Checkout"}).click();
    await page.getByRole('textbox', { name: 'Select Country' }).type("arg");
    await page.getByText(' Argentina').click();
});
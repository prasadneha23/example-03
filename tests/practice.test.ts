import {test,expect} from '@playwright/test';

test('Lauch application', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button').click();
    await page.locator("xpath=(//*[@class='inventory_item'])")
        .filter({hasText: 'Sauce labs Bolt T-Shirt'})
        .getByRole("button")
        .click();

})

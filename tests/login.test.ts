import {test , expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { env } from '../utils/env';
import { log } from 'console';

test('Login with valid credentials using POM',async({page})=>{
    const loginPage = new LoginPage(page);

    await loginPage.goto(env.baseURL);
    await loginPage.login(env.email,env.password);

    await page.waitForURL('**/organizations');
});
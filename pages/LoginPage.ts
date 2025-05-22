import {Page} from '@playwright/test';

export class LoginPage{
    constructor(private page:Page){}

    async goto(url : string){
        await this.page.goto(url);
    }

    async fillEmail(email: string) {
    await this.page.getByPlaceholder('Email').fill(email);
  }

  async fillPassword(password: string) {
    await this.page.getByPlaceholder('Password').fill(password);
  }

  async clickSignIn() {
    await this.page.getByRole('button', { name: 'Sign In' }).click();
  }

  async login(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickSignIn();
  }


}
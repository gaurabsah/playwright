const { test, expect } = require ('@playwright/test');

test ('alert with ok ' , async ({page}) => {

    await page.goto('https://training.rcvacademy.com/test-automation-practice-page');
    //enabling alert handling // dialog window handler

    page.on('dialog', async dialog => {
expect(dialog.type()).toContain('alert')
expect(dialog.message()).toContain('')
await dialog.accept();

    })

await page.click('//form[@id="cu-form-1696568355495"]//div//h2[@class="margin-top-10 margin-bottom-10"]');
}
)
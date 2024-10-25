const {test} = require ('@playwright/test');

test ('demo1', async ({page}) => {

    await page.goto("https://codecanyon.net/");
   await page.click("body > div.shared-global_header-global_header_component__headerWrapper > div.shared-global_header-global_header_component__headerCategoriesWrapper > div > div > nav > div:nth-child(7) > a");


});

// will come back to this end end to end sceanrio later

// css -- body div[role='banner'] div[class='shared-global_header-global_header_component__headerCategories'] div[class='shared-global_header-g[aria-label='categories'] div:nth-child(1lobal_header_component__gridWide'] nav
// relxpath -- body div[role='banner'] div[class='shared-global_header-global_header_component__headerCategoriesWrapper'] div[class='shared-global_header-global_header_component__headerCategories'] div[class='shared-global_header-global_header_component__gridWide'] nav[aria-label='categories'] div:nth-child(1)
// -- absoxpath -- /html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/nav[1]/div[7]
// css - body > div.shared-global_header-global_header_component__headerWrapper > div.shared-global_header-global_header_component__headerCategoriesWrapper > div > div > nav > div:nth-child(7) > a
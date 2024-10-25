const {expect, test} = require('@playwright/test');
const { networkInterfaces } = require('os');

test('demo2', async({page}) =>
{
// const context = await browser.newContext();
// const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator("[name='username']").fill("g");
await page.locator("#password").fill("g");

//const c = 40;
    

await page.locator("#login-form > div:nth-child(4) > div > label:nth-child(1) > span.checkmark").click();
await page.locator("#signInBtn").click();
const textmsg = await page.textContent("[style ='display: none;']");
console.log("error msg is -" , textmsg);
expect (textmsg).toContain("Incorrect username/password.");

if (textmsg == 'Incorrect username/password.')

{

var usname =  await page.textContent("#login-form >div:nth-child(7) >p >b:nth-child(1) ");
var upaswd = await page.textContent("#login-form >div:nth-child(7) >p >b:nth-child(2) ");
var blinktext = await  (page.locator("[href*='documents-request']"));
await expect (blinktext).toHaveAttribute('class', 'blinkingText');
// above step is to verifying the blink text presence.

// /*
const [newpwindow] = await promise.all(
    [
context.WaitForEvent('page'),
blinktext.click(),
    ]
)
   // /*/


// in above promise we are saying to wait for new page to open and and click on th elink to open new page
// this promise .all is used to run multi step paralley.

const text1 = await newpwindow.locator("p[class*='red']").textContent();
 console.log(text1);
const arry = text1.split("@");
const mail = arry[1].split(" ")[0];
console.log(mail);

await page.locator("[name='username']").fill(usname);
await page.locator("#password").fill(upaswd);
await page.locator("#login-form > div:nth-child(4) > div > label:nth-child(2) > span.checkmark").click();
await page.locator('#okayBtn').click();
expect (page.locator("#login-form > div:nth-child(4) > div > label:nth-child(2) > span.checkmark")).toBeChecked();
await page.locator("#signInBtn").click();
console.log("went inside the if ");
let title = await page.title();
console.log(title);
//await page.pause();
expect (title).toContain("Shetty");
const locs= await page.locator('.card-title')
// .card-title

}
else
{

    console.log("wrong user name and pswd");

}

var locs= await page.locator('.card-title')
console.log(locs);

}
)
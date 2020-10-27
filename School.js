const puppeteer = require('puppeteer');
let current_datetime = new Date();
let Formatted_date = (current_datetime.getMonth() + 1) + "/" + current_datetime.getDate();
console.log(Formatted_date);
(async () => {
  //Launching/letting you choose to see chrome or not (false/true)
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  //Going to schoology
  await page.goto('YOUR SCHOOLOGYS LINK HERE');
  await page.waitForNavigation()
  //Putt your email here
  await page.type('#i0116', 'EMAIL HERE')
  await page.click('#idSIButton9')
  await page.waitFor(1000)
  //Password here
  await page.type('#i0118', 'PASSWORD HERE')
  await page.click('#idSIButton9')
  await page.waitFor(1000)
  await page.click('#idBtn_Back')
  await page.waitForNavigation()
  //Copy schoology class link here, not the actual attendance
  await page.goto('HOMEROOM LINK HERE')
  const attendance = await page.$x("//a[contains(., '"+Formatted_date+"')]");
  //const attendance = await page.$x("//a[contains(., 'TEXT USED FOR SIGN IN NAME')]");
  await attendance[0].click();
  await page.waitForNavigation()
  await page.click('#comment-placeholder')
  await page.type('#comment-placeholder', 'Here')
  await page.click('#edit-submit')


  await page.setViewport({width:1920, height:1080});
  await page.screenshot({path: 'example.png', fullpage:true});
  await browser.close();
})();

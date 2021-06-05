const puppeteer = require('puppeteer');
let current_datetime = new Date();
let Formatted_date = (current_datetime.getMonth() + 1) + "/" + current_datetime.getDate();
//var formatted_date = "10/23"
console.log(Formatted_date);
(async () => {
  //Launching/letting you choose to see chrome or not (false/true)
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  try {
  //Going to schoology
  await page.goto('SCHOOLOGY WEBSITE HERE');
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
  await page.screenshot({path: 'Submission.png', fullpage:true});
  console.log('done')
  await browser.close();
}
catch{
  console.log('Error, please look at Submission.png to figure out where something went wrong')
  await page.setViewport({width:1920, height:1080});
  await page.screenshot({path: 'Submission.png', fullpage:true});
  console.log('done')
  await browser.close();
}
})();

# SchoologyAutoLogin

I made this because I was to lazy to goto schoology and type "here". 

# Setup
To set this up you have to create a folder, open it in command prompt or VSCode and type in terminal "npm init -y" once it has finished you want to then type "npm i puppeteer" this will install puppeteer aswell as the headless chromium. you will then copy the school.js file that i have uploaded here and then change the cappitalized text to the information it is asking for, if you do not have the date in your homerooms attendance then you should type "//" next to `const attendance = await page.$x("//a[contains(., '"+Formatted_date+"')]");` and uncomment/delete the "//" next to the line of code below it. You will then put part of the name that the disscusion it is always called everyday. something like "Attendance" it will then go search for it in the page and click it. once it goes into the bage it types "here", submits it and closes the broswer

import puppeteer from 'puppeteer-core';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://www.gbkitten.com/fdms-biz/user/login');
  await page.waitFor('#userName');
  await (await page.type('#userName', '18812345678'));
  await (await page.type('#password', '123456'));
  await page.click('button.antd-pro-components-login-index-submit');
  await page.waitFor('span.ant-alert-message');
  const messageBox = await page.$('span.ant-alert-message');
  const message = await page.evaluate(element => element.textContent, messageBox);
  if (message !== '账户或密码错误') {
    console.log('error: 登录错误没有正确提示');
    // process.exit();
  }

  await page.evaluate(() => {
    document.querySelector('#userName').value = '';
  });
  await page.type('#userName', '13120321963');
  await page.evaluate(() => {
    document.querySelector('#password').value = '';
  });
  await page.type('#password', '123123');
  await page.click('button.antd-pro-components-login-index-submit');
  await page.waitFor(2000);
  const nameBox = await page.$('.antd-pro-components-global-header-index-name');
  const name = await (await nameBox.getProperty('textContent')).jsonValue();
  if (name !== '曹医生') {
    console.log('error: 医生信息错误');
  }

  // await browser.close();
})();

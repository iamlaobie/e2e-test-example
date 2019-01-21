import expect from 'expect-puppeteer';

beforeAll(async () => {
  jest.setTimeout(100000000);
  await page.goto('https://www.gbkitten.com/fdms-biz/user/login');
});

describe('login', () => {
  test('open login page success', async () => {
    await expect(page).toMatch('家庭医生智能管理平台');
  });

  test('login failure', async () => {
    await expect(page).toFill('#userName', '18888888888');
    await expect(page).toFill('#password', '123456');
    await expect(page).toClick('.antd-pro-components-login-index-submit');
    await page.waitFor(5000);
    await expect(page).toMatch('账户或密码错误');
  });

  test('login success', async () => {
    await expect(page).toFill('#userName', '13120321963');
    await expect(page).toFill('#password', '123123');
    await expect(page).toClick('.antd-pro-components-login-index-submit');
    await page.waitFor(5000);
    await expect(page).toMatch('曹医生');
  });
});

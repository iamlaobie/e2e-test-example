import expect from 'expect-puppeteer';

beforeAll(async () => {
  jest.setTimeout(100000000);
  await page.goto('https://www.gbkitten.com/fdms-biz/dashboard');
  await page.waitFor(2000);
  await page.goto('https://www.gbkitten.com/fdms-biz/residents/list');
});

describe('residents', () => {
  test('list', async () => {
    await page.waitFor(2000);
    await expect(page).toMatch('居民列表');
  });
});

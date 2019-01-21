import rp from 'request-promise';

const base = 'https://www.gbkitten.com/staff-api/api/users/login';

describe('test login api', () => {
  test('login failure', async () => {
    const ret = await rp({
      method: 'POST',
      url: base,
      json: {
        username: '1888888888',
        password: '123456',
      },
    }).catch(e => e.error);
    expect(ret.code).toEqual(400);
    expect(ret.message).toBe('用户名或密码错误');
  });

  test('login success', async () => {
    const ret = await rp({
      method: 'POST',
      url: base,
      json: {
        username: '13120321963',
        password: '123123',
      },
    }).catch(e => e.error);
    expect(ret.status).toBe('ok');
    expect(typeof ret.token).toBe('string');
  });
});


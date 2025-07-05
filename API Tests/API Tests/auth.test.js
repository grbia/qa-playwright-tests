const { test, expect } = require('@playwright/test');

test('Should generate a valid token', async ({ request }) => {
  const response = await request.post('/auth', {
    data: {
      username: 'admin',
      password: 'password123'
    }
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body).toHaveProperty('token');
});

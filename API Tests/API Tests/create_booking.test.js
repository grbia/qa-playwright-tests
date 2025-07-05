const { test, expect } = require('@playwright/test');
const { generateBookingPayload } = require('../../Utils/payloads');

test('Should create a booking', async ({ request }) => {
  const response = await request.post('/booking', {
    data: generateBookingPayload()
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body).toHaveProperty('bookingid');
});

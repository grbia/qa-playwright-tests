const { test, expect } = require('@playwright/test');
const { generateBookingPayload } = require('../../Utils/payloads');
const { getToken } = require('../../Utils/apiHelper');

test('should delete a booking', async ({ request }) => {
  const createResponse = await request.post('/booking', {
    data: generateBookingPayload()
  });
  const bookingId = (await createResponse.json()).bookingid;

  const token = await getToken(request);

  const deleteResponse = await request.delete(`/booking/${bookingId}`, {
    headers: { Cookie: `token=${token}` }
  });
  expect(deleteResponse.status()).toBe(201);
});

test('should fail to delete booking without auth', async ({ request }) => {
  const createResponse = await request.post('/booking', {
    data: generateBookingPayload()
  });
  const bookingId = (await createResponse.json()).bookingid;

  const deleteResponse = await request.delete(`/booking/${bookingId}`);
  expect(deleteResponse.status()).toBe(403);
});

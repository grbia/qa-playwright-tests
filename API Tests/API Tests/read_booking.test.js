const { test, expect } = require('@playwright/test');
const { generateBookingPayload } = require('../../Utils/payloads');

test('should fetch all bookings', async ({ request }) => {
  const response = await request.get('/booking');
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(Array.isArray(body)).toBe(true);
});

test('should fetch a booking by ID', async ({ request }) => {
  const createResponse = await request.post('/booking', {
    data: generateBookingPayload()
  });
  const bookingId = (await createResponse.json()).bookingid;

  const getResponse = await request.get(`/booking/${bookingId}`);
  expect(getResponse.status()).toBe(200);
  const booking = await getResponse.json();
  expect(booking.firstname).toBe('Gree');
});

test('should return 404 for non-existent booking ID', async ({ request }) => {
  const response = await request.get('/booking/3823844');
  expect(response.status()).toBe(404);
});

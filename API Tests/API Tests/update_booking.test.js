const { test, expect } = require('@playwright/test');
const { generateBookingPayload } = require('../../Utils/payloads');
const { getToken } = require('../../Utils/apiHelper');

test('should fully update a booking', async ({ request }) => {
  const createResponse = await request.post('/booking', {
    data: generateBookingPayload()
  });
  const bookingId = (await createResponse.json()).bookingid;

  const token = await getToken(request);

  const updatedPayload = generateBookingPayload();
  updatedPayload.firstname = 'Updated';
  updatedPayload.lastname = 'Name';

  const updateResponse = await request.put(`/booking/${bookingId}`, {
    data: updatedPayload,
    headers: { Cookie: `token=${token}` }
  });
  expect(updateResponse.status()).toBe(200);

  const updatedBooking = await updateResponse.json();
  expect(updatedBooking.firstname).toBe('Updated');
  expect(updatedBooking.lastname).toBe('Name');
});

test('should partially update a booking', async ({ request }) => {
  const createResponse = await request.post('/booking', {
    data: generateBookingPayload()
  });
  const bookingId = (await createResponse.json()).bookingid;

  const token = await getToken(request);

  const partialPayload = { firstname: 'Partial', lastname: 'Update' };

  const patchResponse = await request.patch(`/booking/${bookingId}`, {
    data: partialPayload,
    headers: { Cookie: `token=${token}` }
  });
  expect(patchResponse.status()).toBe(200);

  const updatedBooking = await patchResponse.json();
  expect(updatedBooking.firstname).toBe('Partial');
  expect(updatedBooking.lastname).toBe('Update');
});

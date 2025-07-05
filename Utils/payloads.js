function generateBookingPayload() {
    return {
      firstname: 'Gree',
      lastname: 'Bia',
      totalprice: 150,
      depositpaid: true,
      bookingdates: {
        checkin: '2023-07-01',
        checkout: '2025-07-10'
      },
      additionalneeds: 'Breakfast'
    };
  }
  
  module.exports = { generateBookingPayload };
  

# QA Playwright Tests

This repository contains automated tests written using [Playwright](https://playwright.dev/). It includes:

- **API Tests** for the Restful Booker API
- **UI Tests** for Vinted.com (desktop and mobile views)

## Project Structure
```
.
├── API Tests
│   ├── auth.test.js
│   ├── create_booking.test.js
│   ├── delete_booking.test.js
│   ├── read_booking.test.js
│   ├── update_booking.test.js
├── Vinted Tests
│   ├── navbar.test.js
│   ├── hp_search.test.js
│   ├── filter_test-mobile.test.js
├── playwright.config.js
├── package.json
└── README.md
```

## Running Tests

### Install dependencies
```bash
npm install
npx playwright install --with-deps  
```

### Run all tests
```bash
npm run test
```

### Run individual tests
| Test                          | Command                                   |
|-------------------------------|-------------------------------------------|
| Auth API Test                 | `npm run test:auth`                      |
| Create Booking API Test       | `npm run test:create`                    |
| Delete Booking API Test       | `npm run test:delete`                    |
| Read Booking API Test         | `npm run test:read`                      |
| Update Booking API Test       | `npm run test:update`                    |
| Vinted Navbar UI Test         | `npm run test:vinted:navbar`             |
| Vinted Help Center Search     | `npm run test:vinted:search`             |
| Vinted Mobile Filter Test     | `npm run test:vinted:mobile`             |

## Tools & Frameworks
- [Playwright](https://playwright.dev/) for browser automation
- Node.js for running scripts

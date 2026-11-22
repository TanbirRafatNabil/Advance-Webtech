# Product Management API

## Student details

- SL: 10
- Name: Tanbir Rafat Nabil
- Student ID: 23-50058-1
- Section: B

## Requirements

- Node.js 20 or later
- PostgreSQL
- npm

## Setup

1. Start PostgreSQL and create the database:

   ```bash
   createdb -U postgres product_management
   ```

   Alternatively, connect with `psql -U postgres` and run `CREATE DATABASE product_management;`.
2. Copy `.env.example` to `.env` (`Copy-Item .env.example .env` in PowerShell) and set `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, and `DB_NAME` to your local PostgreSQL settings. Do not commit `.env`.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the API:

   ```bash
   npm run start:dev
   ```

The API listens on `http://localhost:3000`. TypeORM creates/updates the entity tables on startup (`synchronize: true`); this is intended for this coursework project, not production.

To run the compiled application, use `npm run build` followed by `npm run start:prod`.

## Endpoints

### Products

| Method | URL | Behavior |
| --- | --- | --- |
| POST | `/products` | Create a product |
| GET | `/products` | List products |
| GET | `/products/:id` | Get a product by ID |
| PATCH | `/products/:id` | Update supplied product fields |
| DELETE | `/products/:id` | Delete a product |

Product JSON fields: `name` (string), `category` (string), `price` (number), `quantity` (integer).

### Employees

| Method | URL | Behavior |
| --- | --- | --- |
| POST | `/employees` | Create an employee |
| GET | `/employees` | List employees |
| GET | `/employees/:id` | Get an employee by ID |
| PATCH | `/employees/:id` | Update supplied employee fields |
| DELETE | `/employees/:id` | Delete an employee |

Employee JSON fields: `name` (string), `email` (string), `phone` (string), `password` (string), `age` (integer), `yearsOfWorking` (integer). The password is included as a coursework dummy field and must not be used for real authentication.

Unknown IDs return HTTP 404. IDs must be integers.

## Postman evidence

Save Postman screenshots in `screenshots/`, using the requested filenames:

1. `01-create.png` — POST `/products`, body, and saved product response.
2. `02-get-all.png` — GET `/products` with at least two saved products.
3. `03-get-by-id.png` — GET `/products/:id` using an actual ID.
4. `04-update.png` — PATCH `/products/:id`, body, and response.
5. `05-confirm-update.png` — GET `/products/:id` showing updated values.
6. `06-delete.png` — DELETE `/products/:id` and successful response.
7. `07-confirm-delete.png` — GET `/products` showing the deleted item is absent.

Each screenshot should include the HTTP method, full URL, response status, and response body where present. Keep the text readable and do not show database credentials.

## Commands

```bash
npm run build
npm run lint
npm run test
npm run test:e2e
```

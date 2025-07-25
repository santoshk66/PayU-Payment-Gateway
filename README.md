# PayU Backend (Hash Generator)

This backend securely generates a SHA-512 hash for PayU form submission using your merchant key and salt.

## Setup

1. Install dependencies:
```
npm install
```

2. Add your credentials to `.env`:
```
PAYU_MERCHANT_KEY=your_key
PAYU_MERCHANT_SALT=your_salt
```

3. Start the server:
```
npm start
```

The server runs at `http://localhost:3000` and provides `/generate-payu-hash` endpoint.

## Deploy

You can deploy this to Render, Railway, or Vercel.

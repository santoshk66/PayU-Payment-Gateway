require('dotenv').config();
const express = require('express');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { PAYU_MERCHANT_KEY, PAYU_MERCHANT_SALT } = process.env;

app.post('/generate-payu-hash', (req, res) => {
  const { txnid, amount, productinfo, firstname, email } = req.body;
  if (!txnid || !amount || !productinfo || !firstname || !email) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const hashString = `${PAYU_MERCHANT_KEY}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${PAYU_MERCHANT_SALT}`;
  const hash = crypto.createHash('sha512').update(hashString).digest('hex');

  res.json({ hash });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ PayU Hash API running on http://localhost:${port}`);
});

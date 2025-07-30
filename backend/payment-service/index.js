require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
connectDB(); // Connect MongoDB

app.use(cors());
app.use(express.json());

app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Payment Service running on port ${PORT}`);
});

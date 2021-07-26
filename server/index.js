require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRouter = require('./routers/userRouter');
const categoryRouter = require('./routers/categoryRouter');
const productRouter = require('./routers/productRouter');
const ErrorHandler = require('./middleware/ErrorHandler');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.SITE_URL,
  }),
);
app.use(cookieParser());
app.use('/api', userRouter);
app.use('/api', categoryRouter);
app.use('/api', productRouter);
app.use(ErrorHandler);

async function start() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    app.listen(PORT, () => console.log(`SERVER HAS BEEN STARTED ON ${PORT}`));
  } catch (e) {
    console.log('Ошибка при старте сервера', e.message);
  }
}
start();

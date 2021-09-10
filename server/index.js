require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRouter = require('./routers/userRouter');
const categoryRouter = require('./routers/categoryRouter');
const productRouter = require('./routers/productRouter');
const orderRouter = require('./routers/orderRouter');
const ErrorHandler = require('./middleware/ErrorHandler');
const fileUpload = require('express-fileupload');
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.static('static'));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.SITE_URL,
  }),
);
app.use(
  fileUpload({
    createParentPath: true,
  }),
);

app.use('/api', userRouter);
app.use('/api', categoryRouter);
app.use('/api', productRouter);
app.use('/api', orderRouter);
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

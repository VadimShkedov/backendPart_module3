const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const { PORT, DB_CONNECTION } = require('./config');
const apiRoutes = require('./src/routes/task');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', apiRoutes);

const startApp = async () => {
  try {
    await mongoose.connect(DB_CONNECTION); 

    app.listen(PORT, () => console.log(`Запущен на ${process.env.PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
} 

startApp();
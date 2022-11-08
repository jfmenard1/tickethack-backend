const mongoose = require ('mongoose')
const connectionString = 'mongodb+srv://admin:i9XLOxPoRmUPrwK3@cluster0.m4ynyxr.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
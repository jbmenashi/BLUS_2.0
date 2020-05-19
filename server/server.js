const express = require('express');
const apiRouter = require('./routes')
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api', apiRouter);
// this ^ is the first slash after localhost
// then the /... in apiRouter is the next /

app.listen(process.env.APP_PORT || '3000', () => {
    console.log(`Server is running on port: ${process.env.APP_PORT || '3000'}`)
}); 
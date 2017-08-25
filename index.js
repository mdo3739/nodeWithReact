const express = require('express');
const app = express();
const mongoose = require('mongoose');

const ENV = process.env.NODE_ENV || 'dev';
if(ENV === 'dev'){
	require('./config/devConfig')(app);
}

require('./services/passport');
require('./routes/authRoutes')(app);

mongoose.connect(process.env.MONGOCONNECTION, {useMongoClient: true});
app.listen(process.env.PORT);
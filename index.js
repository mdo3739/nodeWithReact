const express = require('express');
const app = express();

const ENV = process.env.NODE_ENV || 'dev';
if(ENV === 'dev'){
	require('./config/devConfig')(app);
}

app.get('/', (req, res) => {
	res.send({hi: 'there'});
});

app.listen(process.env.PORT);
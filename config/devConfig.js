var keys = require('./keys.js');

module.exports = (app) => {
	process.env.PORT = 8000;
	process.env.CLIENTID = keys.googleClientId;
	process.env.CLIENTSECRET = keys.googleClientSecret;
	process.env.MONGOCONNECTION = keys.mongoConnection;
};
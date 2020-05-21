const config = require('config');
const API_KEY = config.get('covid.apiKey');
const API_HOST = config.get('covid.apiHost');
const API_URL = config.get('covid.apiUrl');

exports.apiHost = API_HOST;
exports.apiKey = API_KEY;
exports.apiUrl = API_URL;

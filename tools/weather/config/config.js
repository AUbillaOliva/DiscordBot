const config = require('config');
const API_KEY = config.get('weatherApi.apiKey');
const BASE_URL = config.get('weatherApi.apiUrl');

exports.url = BASE_URL;
exports.apiKey = API_KEY;

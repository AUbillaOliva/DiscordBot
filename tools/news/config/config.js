const config = require('config');
const API_KEY = config.get('news.apiKey');
const API_URL = config.get('news.apiUrl');

exports.apiKey = API_KEY;
exports.apiUrl = API_URL;

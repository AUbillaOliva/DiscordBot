const config = require('./config/config');
const fetch = require('node-fetch');
global.Headers = fetch.Headers;

Date.prototype.yyyymmdd = function() {
    let mm = this.getMonth() + 1;
    let dd = this.getDate();
    return [this.getFullYear(),
        (mm>9 ? '' : '0') + mm,
        (dd>9 ? '' : '0') + dd
    ].join('-');
};

function fixedEncodeURIComponent (str) {
      return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
}

async function latestNews(query) {
    try {
        let date = new Date();
        let url = `${config.apiUrl}/everything?qInTitle=${fixedEncodeURIComponent(query)}&sortBy=relevancy&pageSize=5&language=en&apiKey=${config.apiKey}`;
        let res = await fetch(url);
        let resp = await res.json();
        return resp;
    } catch(error){
        console.log(error.message);
    }
}

module.exports.latestNews = latestNews;

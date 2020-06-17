const config = require('./config/config');
const fetch = require('node-fetch');

async function searchNews(query){
    try {
        const url = `${config.apiUrl}/everything?q=${query}&pageSize=5&apiKey=${config.apiKey}`;
        var res = await fetch(url);
        var resp = await res.json();
        return resp;
    } catch(err){
        console.log(err.message);
    }
};

async function headlines(){
    try {
        const url = `${config.apiUrl}/top-headlines?category=general&pageSize=5&apiKey=${config.apiKey}`;
        var res = await fetch(url);
        var resp = await res.json();
        return resp;
    } catch(err){
        console.log(err.message);
    }
}

module.exports = {
    searchNews : searchNews,
    headlines : headlines
}

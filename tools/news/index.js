const fetch = require('node-fetch');

async function searchNews(query){
    try {
        const url = `http://newsapi.org/v2/everything?q=${query}&pageSize=5&apiKey=${process.env.YOUR_NEWS_API_KEY}`; //REPLACE WITH YOUR OWN API KEY
        var res = await fetch(url);
        var resp = await res.json();
        return resp;
    } catch(err){
        console.log(err.message);
    }
};

async function headlines(){
    try {
        const url = `http://newsapi.org/v2/top-headlines?category=general&pageSize=5&apiKey=${process.env.YOUR_NEWS_API_KEY}`; //REPLACE WITH YOUR OWN API KEY
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
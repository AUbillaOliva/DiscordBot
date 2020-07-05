const fetch = require('node-fetch');

async function searchNews(query){
    try {
        const url = `${process.env.newsApiUrl}/everything?q=${query}&pageSize=5&apiKey=${process.env.newsApiKey}`;
        var res = await fetch(url);
        var resp = await res.json();
        return resp;
    } catch(err){
        console.log(err.message);
    }
};

async function headlines(){
    try {
        const url = `${process.env.newsApiUrl}/top-headlines?category=general&pageSize=5&apiKey=${process.env.newsApiKey}`;
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

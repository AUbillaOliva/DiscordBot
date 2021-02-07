const fetch = require("node-fetch");
global.Headers = fetch.Headers;

async function comLast(id){
    try {
        let url = `https://chile-coronapi1.p.rapidapi.com/v3/latest/communes`;
        var res = await fetch(url, {headers: {'x-rapidapi-key': process.env.COVID_API_KEY , 'x-rapidapi-host': process.env.COVID_API_HOST }}); //REPLACE WITH YOUR API KEY
        var resp = await res.json();
        return resp;
    } catch(err){
        console.log(err.message);
    }
};

async function comHist(id){
    try {
        let url = `https://chile-coronapi1.p.rapidapi.com/v3/historical/comunnes`;
        if(id) url = `https://chile-coronapi1.p.rapidapi.com/v3/historical/comunnes?id=${id}`;
        var res = await fetch(url, {headers: {'x-rapidapi-key': process.env.COVID_API_KEY , 'x-rapidapi-host': process.env.COVID_API_HOST }}); //REPLACE WITH YOUR API KEY
        var resp = await res.json();
        console.log(resp);
        return resp;
    } catch(err){
        console.log(err.message)
    }
}

module.exports = {
    comLast : comLast,
    comHist : comHist
}

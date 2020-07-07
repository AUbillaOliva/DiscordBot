const fetch = require("node-fetch");
global.Headers = fetch.Headers;

async function comLast(id){
    try {
        let url = `${process.env.covidApiUrl}/latest/communes`;
        var res = await fetch(url, {headers: {'x-rapidapi-key': process.env.covidApiKey, 'x-rapidapi-host': process.env.covidApiHost}});
        var resp = await res.json();
        return resp;
    } catch(err){
        console.log(err.message);
    }
};

async function comHist(id){
    try {
        let url = `${process.env.covidApiUrl}/historical/comunnes`;
        if(id) url = `${process.env.covidApiUrl}/historical/comunnes?id=${id}`;
        var res = await fetch(url, {headers: {'x-rapidapi-key': process.env.covidApiKey, 'x-rapidapi-host': process.env.covidApiHost}});
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

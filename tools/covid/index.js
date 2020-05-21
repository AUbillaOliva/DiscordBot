const config = require("./config/config");
const fetch = require("node-fetch");
global.Headers = fetch.Headers;

async function comLast(id){
    try {
        let url = `${config.apiUrl}/latest/communes`;
        /*if(!Number.isNaN(id))
            url = `${config.apiUrl}/latest/communes?id=${id}`;*/
        var res = await fetch(url, {headers: {'x-rapidapi-key': config.apiKey, 'x-rapidapi-host': config.apiHost}});
        var resp = await res.json();
        //console.log(resp);
        return resp;
    } catch(err){
        console.log(err.message);
    }
};

async function comHist(id){
    try {
        let url = `${config.apiUrl}/historical/comunnes`;
        if(id) url = `${config.apiUrl}/historical/comunnes?id=${id}`;
        var res = await fetch(url, {headers: {'x-rapidapi-key': config.apiKey, 'x-rapidapi-host': config.apiHost}});
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

const config = require("./config/config");
const fetch = require("node-fetch");
const axios = require("axios");

async function weatherApi(locationId) {
  try {
    const urlcl = `${config.url}?q=${locationId},cl&appid=${config.apiKey}`; 
    const urlinter = `${config.url}?q=${locationId}&appid=${config.apiKey}`;
    var res = await fetch(urlcl);
    if(res.status === 404){
        console.log("not found, search for inter")
        res = await fetch(urlinter);
    }
    var resp = await res.json();
    console.log(resp);
    return resp;
  } catch (err) {
    console.log("from here: " + err);
  }
}

module.exports.weatherApi = weatherApi;

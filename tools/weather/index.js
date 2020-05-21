const config = require("./config/config");
const fetch = require("node-fetch");
const axios = require("axios");

async function weatherApi(locationId) {
  try {
    const url = `${config.url}?q=${locationId}&appid=${config.apiKey}`;
    var res = await fetch(url);
    var resp = await res.json();
    console.log(resp);
    return resp;
  } catch (err) {
    console.log("from here: " + err);
  }
}

module.exports.weatherApi = weatherApi;

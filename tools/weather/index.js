const fetch = require("node-fetch");

async function weatherApi(locationId) {
  try {
    const urlcl = `${process.env.weatherApiUrl}?q=${locationId},cl&appid=${process.env.weatherApiKey}`; 
    const urlinter = `${process.env.weatherApiUrl}?q=${locationId}&appid=${process.env.weatherApiKey}`;
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

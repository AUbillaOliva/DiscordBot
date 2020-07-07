const fetch = require("node-fetch");

async function weatherApi(locationId) {
  try {
    // FOR CHILE LOCATIONS
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${locationId}&appid=${YOUR_API_KEY}`; //REPLACE WITH YOUR OWN API KEY 
    var res = await fetch(url);
    if(res.status === 404){
      console.log("nothing found")
    }
    var resp = await res.json();
    console.log(resp);
    return resp;
  } catch (err) {
    console.log("from here: " + err);
  }
}

module.exports.weatherApi = weatherApi;

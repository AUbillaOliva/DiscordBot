const request = require('request');
const fetch = require('node-fetch');

async function fday (msg) {
    try {
        const url = `https://apis.digital.gob.cl/fl/feriados`;
        var res = await fetch(url);
        if(res.status === 404){
          console.log("nothing found")
        }
        var resp = await res.json();
        return resp;
      } catch (err) {
        console.log("from here: " + err);
      }
}

module.exports = fday;

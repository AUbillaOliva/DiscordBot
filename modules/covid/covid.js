const { comLast, comHist } = require('../../tools/covid/index.js');

function customFilter(object, query){
    if(object.hasOwnProperty('commune') && object["commune"] == query)
        return object;
    for(var i=0; i<Object.keys(object).length; i++){
        if(typeof object[Object.keys(object)[i]] == "object"){
            var o = customFilter(object[Object.keys(object)[i]]);
            if(o != null)
               return o;
        }
    }
    return null;
}

const covid = async (msg) => {
    const loc = msg.content.split("|covid ");
    function send(){
        return new Promise((res, rej) => {
            res(comLast(loc[1].normalize('NFD').replace)).replace(/[\u0300-\u036f]/g, "");
        });
    }
    send()
        .then(value => {
            let found = false;
            for(first in value){                
                var primaryIndex = Object.entries(value);
                var secondartIndex = Object.keys(value).indexOf(first);
                // COMUNA
                let mCase = Object.entries(primaryIndex[secondartIndex][1]);
                // FECHA
                let date = Object.keys(mCase[2][1]);
                // NUM. CASOS
                let number = Object.values(mCase[2][1]);
                let city = Object.values(mCase[0])
                if(city[1].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === loc[1].toLowerCase()){
                    msg.channel.send(
                        "Ciudad: " + city[1] +
                        "\nFecha ultima actualizacion: " + date + 
                        "\nNumero de casos: " + number
                    )
                    found = true;
                    break;  
                }
            }
            if(!found){
                msg.channel.send("No pude encontrar datos mi rey \:ok_hand:\:pensive:")
            }
        })
        .catch(console.error)

}

module.exports = covid;

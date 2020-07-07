const weatherApi = require("../../tools/weather/index.js");

const getWeather = async (msg) => {
  const loc = msg.content.split("tiempo ");
  // CONNECT TO WEATHER API
  function send() {
    return new Promise((res, rej) => {
      res(weatherApi.weatherApi(loc[1].normalize("NFD").replace(/[\u0300-\u036f]/g, "")));
    });
  }
  send()
    .then((value) => {
      if (value.message != "city not found") {
        let main;
        let perc;
        if (value.weather[0].main === "Clouds") {
          if (value.weather[0].id === 801) {
            perc = "11-25 %";
          } else if (value.weather[0].id === 802) {
            perc = "25-50 %";
          } else if (value.weather[0].id === 803) {
            perc = "51-84 %";
          } else if (value.weather[0].id === 804) {
            perc = "85-100 %";
          }
          main = `nublado \:cloud: \`[${perc}]\``;
        } else if (value.weather[0].main === "Clear") {
          main = "un cielo despejado :sunny:";
        } else if (value.weather[0].main === "Thunderstorm") {
          main = "con una tormenta :thunder_cloud_rain:";
        } else if (value.weather[0].main === "Drizzle") {
          main = "llovizna :white_sun_rain_cloud:";
        } else if (value.weather[0].main === "Rain") {
          if (value.weather[0].id === 500) {
            main = "lluvia ligera :cloud_rain:";
          } else if (value.weather[0].id === 501) {
            main = "lluvia moderada :cloud_rain:";
          } else if (value.weather[0].id === 502) {
            main = "lluvia intensa :cloud_rain:";
          } else if (value.weather[0].id === 503) {
            main = "lluvia muy intensa :cloud_rain:";
          } else if (value.weather[0].id === 504) {
            main = "lluvia extrema :cloud_rain:";
          } else if (value.weather[0].id === 511) {
            main = "lluvia helada :cloud_rain:";
          } else if (value.weather[0].id === 520) {
            main = "lluvia de intensidad ligera :cloud_rain:";
          } else if (value.weather[0].id === 521) {
            main = "un aguacero :cloud_rain:";
          } else if (value.weather[0].id === 522) {
            main = "lluvia de alta intensidad :cloud_rain:";
          } else if (value.weather[0].id === 500) {
            main = "lluvia irregular :cloud_rain:";
          }
        } else if (value.weather[0].main === "Snow") {
          if (value.weather[0].id === 600) {
            main = "nevando ligeramente :cloud_snow:";
          } else if (value.weather[0].id === 601) {
            main = "nevado :cloud_snow:";
          } else if (value.weather[0].id === 602) {
            main = "nevando fuerte :cloud_snow:";
          } else if (value.weather[0].id === 611) {
            main = "aguanieve :cloud_snow:";
          } else if (value.weather[0].id === 612) {
            main = "nevando ligeramente :cloud_snow:";
          } else if (value.weather[0].id === 613) {
            main = "chubascos de nieve  :cloud_snow:";
          } else if (value.weather[0].id === 615) {
            main = "lluvia ligera y nieve :cloud_snow:";
          } else if (value.weather[0].id === 616) {
            main = "lluvia y nieve :cloud_snow:";
          } else if (value.weather[0].id === 620) {
            main = "chubascos ligeros con nieve :cloud_snow:";
          } else if (value.weather[0].id === 621) {
            main = "chubascos de nieve :cloud_snow:";
          } else if (value.weather[0].id === 622) {
            main = "fuerte lluvia de nieve :cloud_snow:";
          }
        } else if (value.weather[0].id > 700 && value.weather[0].id < 800) {
          if (value.weather[0].id === 701) {
            main = "niebla :cloud:";
          } else if (value.weather[0].id === 711) {
            main = "humo :cloud:";
          } else if (value.weather[0].id === 721) {
            main = "calina :cloud:";
          } else if (value.weather[0].id === 731) {
            main = "remolinos de arena/polvo :cloud_tornado:";
          } else if (value.weather[0].id === 741) {
            main = "niebla :cloud:";
          } else if (value.weather[0].id === 751) {
            main = "arena :hourglass_flowing_sand:";
          } else if (value.weather[0].id === 761) {
            main = "polvo :cloud:";
          } else if (value.weather[0].id === 762) {
            main = "ceniza volcanica :volcano:";
          } else if (value.weather[0].id === 771) {
            main = "chubascos :cloud_rain:";
          } else if (value.weather[0].id === 781) {
            main = "un tornado :cloud_tornado:";
          }
        }
        msg.channel.send(
          "Actualmente esta con " +
            main +
            "\nViento: " +
            value.wind.speed +
            "\nHumedad: " +
            value.main.humidity +
            "%"
        );
        let temp = (value.main.temp - 273.15).toFixed(1);
        if (temp < 15) {
          msg.channel.send(`Abriguese mi rey \:heart: \`[${temp} C]\``);
        } else if (temp >= 15) {
          msg.channel.send(
            `No esta tan helao mi rey \:ok_hand: \`[${temp} C]\``
          );
        }
      } else {
        msg.channel.send(
          "No pude encontrar la ciudad mi rey :pensive: :ok_hand:"
        );
      }
    })
    .catch(console.error);
};

module.exports = getWeather;

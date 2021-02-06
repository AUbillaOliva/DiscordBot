const { searchNews, headlines } = require("../../tools/news/index.js");

const search = async (msg) => {
  const loc = msg.content.split("|news ");
  function send() {
    return new Promise((res, rej) => {
      if (loc[1] === undefined) {
        res(headlines());
      } else {
        res(
          searchNews(
            loc[1]
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase()
          )
        );
      }
    });
  }
  send().then((value) => {
    for (let i = 0; i < value.articles.length; i++) {
      let embed = {
        title: value.articles[i].title,
        url: value.articles[i].url,
        image: { url: value.articles[i].urlToImage },
        author: {
          name: value.articles[i].author,
        },
        timestamp: value.articles[i].publishedAt,
        description: value.articles[i].description,
      };
      msg.channel.send({ embed: embed });
    }
  });
};

module.exports = search;
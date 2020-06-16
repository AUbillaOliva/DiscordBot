const newsApi = require('../../tools/news/index.js');
const Discord = require('Discord.js');

const getLatest = (msg) => {
    const query = msg.content.split('news ').join('');

    function get(){
        return new Promise((res, rej) => {
            res(newsApi.latestNews(query.normalize("NFD").replace(/[\u0300-\u036f]/g, "")));
            rej(new Error('lol'));
        });
    }
    get()
        .then(value => {
            try{
                msg.channel.send(`Noticias sobre ${query}`);
                let embed;
                for(let i = 0; i < 5; i++){
                    msg.channel.send({embed: {
                        title: value.articles[i].title,
                        url: value.articles[i].url,
                        description: value.articles[i].description,
                        image: {
                            url: value.articles[i].urlToImage
                        },
                        color: 3447003,
                        author: {
                            name: value.articles[i].author
                        }
                    }});
                }
           } catch(error){ console.error(error)}
        });
}

module.exports = getLatest;

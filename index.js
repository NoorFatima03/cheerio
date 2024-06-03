const axios = require('axios');
const cheerio = require('cheerio');

axios.get("https://arstechnica.com/gadgets/").then(res =>{
    const $ = cheerio.load(res.data);

    $("li.articals").each((i, element) =>{
        const link =$(element).find("a.overlay").attr("href");



        console.log(link);

    });
});
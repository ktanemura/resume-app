let axios = require ('axios');

function getQuote(req, res) {
    axios.get("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1")
        .then(quote => {
            res.send(quote.data[0]);
        })
        .catch(err => {
            console.log("ERR", err)
            res.status(500).send(err);
        });
}

module.exports = {
    getQuote
}
var db = require("../models");
module.exports = function(app) {

        //add a bar to a crawl
        app.post('/places/:id', function(req, res) {
            models.Places.create(req.body)
                .then(function(placesId) {
                    res.json(placesId)
                })
                .catch(function(err) {
                    console.error(err);
                })

        })

        //get all crawls

        app.get("/api/crawls", function(req, res) {
                    var query = {};
                    if (req.query.CrawlerId) {
                        query.CrawlerId = req.query.CrawlerId;
                    }
                    // Here we add an "include" property to our options in our findAll query
                    // We set the value to an array of the models we want to include in a left outer join

                    models.Crawls.findAll({
                        where: query,
                        include: [models.Crawler]
                    }).then(function(modelsCrawls) {
                        res.json(modelsCrawls);
                    });

                }
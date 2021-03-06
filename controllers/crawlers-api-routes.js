var models = require("../models")

module.exports = function(app) {
    // Create all our routes and set up logic within those routes where required.
    // Shouldn't all this be in the routes files in the routes folder? Asking for a friend.
    app.get('/crawlers', function(req, res) {
        models.Crawler.findAll({})
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err) {
                console.error(err);
            });
    });
    app.get('/crawlers/:id', function(req, res) {
        models.Crawler.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err) {
                console.error(err);
            });
    });
    app.post('/crawlers', function(req, res) {
        models.Crawler.create(req.body)
            .then(function(crawler) {
                res.json(crawler)
            })
            .catch(function(err) {
                console.error(err);
            })
    });
    app.delete('/crawlers/:id', function(req, res) {
        models.Crawler.destroy({
                where: {
                    id: req.params.id
                }
            }).then(function(crawler) {
                res.json(crawler);
            })
            .catch(function(err) {
                console.error(err);
            })
    });



};
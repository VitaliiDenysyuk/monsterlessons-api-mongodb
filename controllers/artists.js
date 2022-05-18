const Artists = require('../models/artists');
exports.all = function (req, res) {
    Artists.all((err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
}
exports.findById = function (req, res) {
    Artists.findById(req.params.id, (err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
}
exports.create = function (req, res) {
    let artist = {
        name: req.body.name
    };
    Artists.create(artist, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500)
        }
        res.send(artist);

    })
}
exports.update = function (req, res) {
    let newvalues = { $set: { name: req.body.name } };
    Artists.update(req.params.id, newvalues, (err, doc) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}
exports.delete = function (req, res) {
    Artists.delete(req.params.id, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}
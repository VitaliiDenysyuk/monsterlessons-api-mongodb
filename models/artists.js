const db = require('../db');
const ObjectId = require('mongodb').ObjectId;

exports.all = function (cb) {
    db.get().collection('artists').find().toArray((err, docs) => {
        cb(err, docs)
    })
}
exports.findById = function (id, cb) {
    db.get().collection('artists').find({ _id: ObjectId(id) }).toArray((err, docs) => {
        cb(err, docs)
    })
}
exports.create = function (artist, cb) {
    db.get().collection('artists').insertOne(artist, (err, result) => {
        cb(err, result)
    })
}
exports.update = function (id, newvalue, cb) {
    db.get().collection('artists').updateOne(
        { _id: ObjectId(id) },
        newvalue,
        (err, result) => cb(err, result))
}
exports.delete = function (id, cb) {
    db.get().collection('artists').deleteOne(
        { _id: ObjectId(id) },
        (err, result) => {
            cb(err, result)
        })
}

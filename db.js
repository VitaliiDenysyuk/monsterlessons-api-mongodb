const MongoClient = require('mongodb').MongoClient;
const state = {
    db:null,
}
exports.connect = function(urlBase, name, done){
    if (state.db){
        return done
    }
    MongoClient.connect(urlBase, (err, database) => {
        if (err) {
            return done(err);
        };
        state.db = database.db(name);
        done();
    })
}
exports.get = function(){
    return state.db;
}
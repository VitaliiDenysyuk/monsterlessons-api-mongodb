const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const artistsController = require("./controllers/artists");

const urlBase = "mongodb://localhost:27017/";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('Hello API');
});
app.get('/artists', artistsController.all);
app.get('/artists/:id', artistsController.findById);
app.post('/artists', artistsController.create);
app.put('/artists/:id', artistsController.update);
app.delete('/artists/:id', artistsController.delete);

db.connect(urlBase, "myapi", (err) => {
    if (err) {
        return console.log(err)
    };
    app.listen(3012, function () {
        console.log('API app started')
    });
})




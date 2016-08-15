/**
 * LearningDocker
 * https://github.com/marcopeg/learning-docker
 *
 * NodeJS Server App
 * (this is a complex app, do NOT expect to understand every detail of it!)
 */

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    console.log(new Date(), 'a request happened!');
    res.send('Hello World!');
});

app.listen(port, function () {
    console.log(new Date(), 'Example app listening on port ' + port + '!');
});

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
const root = path.join(__dirname, 'public')
app.use(express.static(root));

app.use(bodyParser.urlencoded({
    extended: true
}));

// ---- Set your routes below ----

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: root});
});

app.get('/sub', function (req, res) {
    res.sendFile('sub.html', { root: root});
});

module.exports = app;
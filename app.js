var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');

// ---- Set your routes below ----

app.get('/', function (req, res) {
    res.render('index', { // SET TEMPLATE
        complete: "You are ready to go!"
    });
});

module.exports = app;
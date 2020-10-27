global.gConfig = require('./config.json');
var app = require("./app");
var port = process.env.PORT || gConfig.server.port;
app.listen(port);
console.log("Server is running on " + gConfig.server.url + ":" + port);
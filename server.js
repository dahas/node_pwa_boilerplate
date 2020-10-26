var app = require("./app");
var port = process.env.PORT || 8000;
app.listen(port);
console.log("Server is running on http://localhost:" + port);
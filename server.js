var express= require ("express");
var bodyParser = require ("body-parser");

var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))


// require("./routes/apiRoutes")(app);
require("./routes/htmlroutes.js")(app);

//app listening to port.
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
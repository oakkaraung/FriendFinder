const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friends = require("./App/Data/friends.js");
var htmlRoute = require("./App/Routing/htmlRoutes");
var apiRoute = require("./App/Routing/apiRoutes");

htmlRoute.home(app);
htmlRoute.survey(app);
apiRoute.get(app);
apiRoute.post(app);

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });
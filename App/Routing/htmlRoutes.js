const path = require("path");

module.exports.home = function(app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../", "Public", "home.html"));
    });
};

module.exports.survey = function(app) {
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../", "Public", "survey.html"));
    });
};
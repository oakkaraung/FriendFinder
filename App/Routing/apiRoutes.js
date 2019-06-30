const path = require("path");
var friends = require("../Data/friends").arr

module.exports.get = function(app) {
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });
};

module.exports.post = function(app) {
    app.post("/api/friends", (req, res) => {
        var compatScores = [];
        const friend = req.body;
        for (var i = 0; i < 10; i++) {
            friend.scores[i] = parseInt(friend.scores[i]);
        }
        require("../Data/friends").arrPush(friend);
        for (var i = 0; i < friends.length - 1; i++) {
            var thisScore = 0;
            for (var x = 0; x < 10; x++) {
                thisScore += Math.abs(friends[i].scores[x] - friend.scores[x]);
            }
            compatScores.push(thisScore);
        }
        var holder = {index: 0, value: compatScores[0]};
        for (var i = 1; i < compatScores.length; i++) {
            if (compatScores[i] < holder.value) {
                holder.index = i;
                holder.value = compatScores[i];
            }
        }
        res.send(friends[holder.index]);
    });
};
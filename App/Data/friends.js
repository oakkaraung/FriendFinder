var friends = [
    {
        name:"James",
        photo:"https://image.shutterstock.com/mosaic_250/580987/439360372/stock-photo-happy-young-businessman-with-tablet-winking-and-showing-ok-sign-over-white-background-439360372.jpg",
        scores:[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {
          name: "Oakkar",
          photo: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/60109049_2320798984646659_3389891865665863680_n.jpg?_nc_cat=105&_nc_oc=AQnt5vP9x9dpleoru88HDm9KckSPcOL4F_0AoEAr6YNNLipvfo4nEQjbWCOWUP-_BeE&_nc_ht=scontent-lax3-1.xx&oh=c578b4c721b8041da0cb2d350428bcd9&oe=5DBE2C05",
          scores: [
              2,5,5,4,4,1,2,2,3,1
          ]
      }
]

module.exports.arr = friends;
module.exports.arrPush = function(obj) {
    friends.push(obj);
}
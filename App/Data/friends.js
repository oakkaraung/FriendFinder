var friends = [
    {
        name:"Ahmed",
        photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
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
              1,2,3,4,5,5,4,3,2,1
          ]
      }
]

module.exports.arr = friends;
module.exports.arrPush = function(obj) {
    friends.push(obj);
}
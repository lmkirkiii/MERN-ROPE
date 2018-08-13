const GreetingCard = require("./db/models.js");
module.exports = {
    index: (req, res) => {
         GreetingCard.find({})
         .then((test)=> console.log(test))
      },

    //   new: (req,res)=> {
    //     // GreetingCard.find({})
    //     // .then((new) => console.log(new))
    //     console.log('new')
    // }
};
const mongoose = require('./models.js')
const GreetingCard = mongoose.model('GreetingCard')
const greetingCardData = require('./greetingCard-data.json')


GreetingCard.remove({})
  .then(() => {
    GreetingCard.collection.insert(greetingCardData)
      .then((greetings) => {
        console.log(greetings)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })

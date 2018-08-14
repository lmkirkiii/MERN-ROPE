const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const mongoose = require('./db/models.js')
const GreetingCard = mongoose.model('GreetingCard')

const app = express()



app.use(express.static('client/build'))
app.use(cors())
app.set('port', process.env.PORT || 3001)
app.use(parser.json())

app.get('/api/greeting-card',(req,res)=> {
  GreetingCard.find()
  .then((greetings)=>{
    for(var i = greetings.length -1; i > 0; i--){
      var j = Math.floor(Math.random() * (i + 1));
      var temp = greetings[i];
      greetings[i] = greetings[j];
      greetings[j] = temp;
      var greeter = greetings[i]
      console.log(greeter)
      res.json(greeter)
 }
})
.catch((err) => {
console.log(err)
})
})



app.post('/api/greeting-card',(req,res)=>{
  GreetingCard.create({})
  .then((greetings)=>{
    greetings.save()
    console.log(greetings)
    res.json(greetings)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.get('/api/greeting-card/:id',(req,res)=>{
  GreetingCard.findById(req.params.id)
  .then((greetings)=>{
    res.json(greetings)
  })
  .catch((err)=>{
    console.log(err)
  })
})

app.delete('/api/greeting-card/',(req,res)=>{
  console.log(res)
  GreetingCard.deleteMany({})
  .then((greetings)=>{
  console.log(greetings)
  })
  .catch((err)=>{
    console.log(err)
  })
})



app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})

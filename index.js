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
app.use(require("./routes.js"));


app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})

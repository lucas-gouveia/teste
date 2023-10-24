require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({message: 'online'})
})

console.log(`Running on server http://localhost:${process.env.PORT}`)

app.listen(process.env.PORT);
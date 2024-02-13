const express = require('express')
const app = express()
const port = 5000
const mongoDb = require('./config/mongoose');

mongoDb()
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.user()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
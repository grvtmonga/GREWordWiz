const express = require('express')
const app = express()
const port = 5000
const mongoDb = require('./config/mongoose');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./Routes/userRoute");
require("dotenv").config();

mongoDb()
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());

app.use("/", userRoute);
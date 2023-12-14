'use strict';
const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const db = require("./models")
const app = express()
const cookieParser = require('cookie-parser')
const routes = require('./routes/routes')
const { notFoundHandler } = require('./middleware/notFound')
const { customErr } = require('./middleware/customErr')
const PORT = process.env.PORT || 5001

//Middlewares
app.use(express.json()) //parse data from body to use req.body
app.use(express.urlencoded({ extended: true }))  //prase data from "forms" request
app.use(routes)
app.use(customErr)
app.use(notFoundHandler)
app.use(cookieParser)


app.listen(PORT, () => console.log(`App Listening @${PORT}`))






































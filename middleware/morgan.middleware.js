const express = require("express");
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')

const Server = express()
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
Server.use(morgan('combined', { stream: accessLogStream }))

Server.get('/', function (req, res) {
    res.send('hello, world!')
  })
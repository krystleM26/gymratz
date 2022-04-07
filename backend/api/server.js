const express = require('express')
const server = express()
var cors = require('cors')



const authRouter = require('./auth/auth-router')

server.use(express.json())
server.use(cors()) 

server.use('/api/auth', authRouter)



server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
  });

module.exports = server

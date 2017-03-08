'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/recordings', require('./recordings'))
  .use('/kits', require('./kits'))
  .use('/samples', require('./samples'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())

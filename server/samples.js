'use strict'

const db = require('APP/db')
const Sample = db.model('samples')

module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    Sample.findAll({
      where: req.query
    })
    .then(samples => res.json(samples))
    .catch(next)
  })

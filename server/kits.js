'use strict'

const db = require('APP/db')
const Kit = db.model('kits')

module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    Kit.findAll()
      .then(kits => res.json(kits))
      .catch(next)
  })
  .get('/:kitId', (req, res, next) => {
    Kit.findOne({
      where: {
        id: req.params.kitId
      }
    })
    .then(kit => res.json(kit))
    .catch(next)
  })

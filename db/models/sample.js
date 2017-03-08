'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Sample = db.define('samples', {
    name: Sequelize.STRING,
    source: {
      type: Sequelize.STRING,
      validate: {
        isUrl: true,
      }
    },
  }
)

module.exports = Sample

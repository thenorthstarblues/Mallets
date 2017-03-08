'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Recording = db.define('recordings', {
    name: Sequelize.STRING,
  }
)

module.exports = Recording

'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Kit = db.define('kits', {
    name: Sequelize.STRING
  }
)

module.exports = Kit

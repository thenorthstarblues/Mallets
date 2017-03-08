'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
const Kit = require('./kit')
const Recording = require('./recording')
const Sample = require('./sample')

OAuth.belongsTo(User)
User.hasOne(OAuth)
User.hasMany(Recording)
Kit.hasMany(Sample)


module.exports = { User, Kit, Recording, Sample }

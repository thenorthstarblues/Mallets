'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const {resolve} = require('path')
const passport = require('passport')
const PrettyError = require('pretty-error')
const finalHandler = require('finalhandler')
const pkg = require('APP')
const app = express()

if (!pkg.isProduction && !pkg.isTesting) {
  app.use(require('volleyball'))
}

const prettyError = new PrettyError()
prettyError.skipNodeFiles()
prettyError.skipPackage('express')

module.exports = app
  .use(require('cookie-session') ({
    name: 'session',
    keys: [process.env.SESSION_SECRET || 'an insecure secret key'],
  }))

  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(passport.initialize())
  .use(passport.session())
  .use(express.static(resolve(__dirname, '..', 'public')))
  .use('/api', require('./api'))
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))

  .use((err, req, res, next) => {
    console.error(err.stack)
    finalHandler(req, res)(err)
  })

if (module === require.main) {
  const server = app.listen(
    process.env.PORT || 1337,
    () => {
      console.log(`--- Started HTTP Server for ${pkg.name} ---`)
      const { address, port } = server.address()
      const host = address === '::' ? 'localhost' : address
      const urlSafeHost = host.includes(':') ? `[${host}]` : host
      console.log(`Listening on http://${urlSafeHost}:${port}`)
    }
  )

  const io = require('socket.io')(server);
  io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('disconnect', () => {
      console.log('user disconnected');
    })
    socket.on('room', function(data) {
      socket.join(data.room);
    })
    socket.on('leave room', (data) => {
      socket.leave(data.room)
    })
    socket.on('play', function(data) {
      socket.broadcast.to(data.room).emit('receive play',
      data)
    })
    socket.on('stop', function(data) {
      socket.broadcast.to(data.room).emit('receive stop',
      data)
    })
  })
}

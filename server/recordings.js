'use strict'

const db = require('APP/db')
const Recording = db.model('recordings')

module.exports = require('express').Router()
  .get('/', (req, res, next) => {
    Recording.findAll({
      where: req.query
    })
    .then(recordings => res.json(recordings))
    .catch(next)
  })
  .get('/:recordingId', (req, res, next) => {
    Recording.findById(req.params.recordingId)
    .then(recording => res.json(recording))
    .catch(next)
  })
  .post('/', (req, res, next) => {
    Recording.create(req.body)
    .then(createdRecording => res.json(createdRecording))
    .catch(next)
  })
  .put('/:recordingId', (req, res, next) => {
    Recording.findById(req.params.recordingId)
    .then(recording => recording.update(req.body))
    .then(recording => res.status(201).send(recording))
    .catch(next)
  })
  .delete('/:recordingId', (req, res, next) => {
    Recording.findById(req.params.recordingId)
    .then(recording => recording.destroy())
    .then(() => res.sendStatus(204))
    .catch(next)
  })


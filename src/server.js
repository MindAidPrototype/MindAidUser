const Hapi = require('hapi')
const port = process.env.PORT || 3000
const Vision = require('vision')
const Inert = require('inert')

const views = require('./routes/views.js')
const index = require('./routes/index.js')
const about = require('./routes/about.js')
const learn = require('./routes/learn.js')
const listen = require('./routes/listen.js')
const questions = require('./routes/questions.js')
const refer = require('./routes/refer.js')
const remind = require('./routes/remind.js')
const publicdir = require('./routes/publicdir.js')

const plugins = [Vision, Inert]

const server = new Hapi.Server()

server.connection({port})

server.register(plugins, err => {
  if (err) throw err
  server.views(views)

  server.route([
    index,
    about,
    learn,
    listen,
    questions,
    refer,
    remind,
    publicdir
  ])
})

module.exports = server

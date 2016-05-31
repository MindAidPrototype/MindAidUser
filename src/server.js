const Hapi = require('hapi')
const port = process.env.PORT || 3000
const Vision = require('vision')
const Inert = require('inert')

const views = require('./routes/views.js')

const plugins = [Vision, Inert]

const server = new Hapi.Server()

server.connection({port})

server.register(plugins, err => {
  if (err) throw err
  server.views(views)
  server.route([
    require('./routes/index.js'),
    require('./routes/about.js'),
    require('./routes/learn.js'),
    require('./routes/listen.js'),
    require('./routes/screen.js'),
    require('./routes/refer.js'),
    require('./routes/remind.js'),
    require('./routes/publicdir.js')
  ])
})

module.exports = server

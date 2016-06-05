const Hapi = require('hapi')
const port = process.env.PORT || 3000
const Vision = require('vision')
const Inert = require('inert')
require('env2')('./config.env')

const views = require('./routes/views.js')

const plugins = [Vision, Inert]

const server = new Hapi.Server()

server.connection({port})

server.state('cookie', {
  ttl: 60 * 60 * 1000,
  isHttpOnly: true,
  encoding: 'iron',
  password: process.env.IRONPASSWORD
})

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
    require('./routes/login.js'),
    require('./routes/logout.js'),
    require('./routes/authenticate.js'),
    require('./routes/newStudentInfo.js'),
    require('./routes/createNewUser.js')(process.env.NEWUSERSECRET),
    require('./routes/publicdir.js')
  ])
})

module.exports = server

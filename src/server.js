const Hapi = require('hapi')
const http = require('http')
const Path = require('path')
const vision = require('vision')
var inert = require('inert')
const handlebars = require('handlebars')

const plugins = [vision, inert]

const server = new Hapi.Server()
server.connection({ port: 3001 })

server.register(plugins, (err) => {
  if (err) throw err
  server.views({
    engines: {html: handlebars},
    relativeTo: __dirname + '/../',
    path: './views',
    layoutPath: './views/layout',
    layout: 'default',
    partialsPath: './views/partials/'
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply('Hello, server1!')
    }
  })

  server.route({
    method: 'GET',
    path: '/sayhello',
    handler: function (request, reply) {
      const options = {
        port: 4000,
        hostname: '127.0.0.1',
        method: 'GET',
        path: '/sayhello2'
      }
      var replying = ''
      const req = http.request(options, res => {
        res.on('data', (chunk) => {
          replying += chunk
        })
        res.on('end', () => {
          reply(replying)
          console.log('No more data in response.')
        })
      })
      req.end()
    }
  })

  server.route({
    method: 'GET',
    path: '/welcome',
    handler: function (request, reply) {
      reply.view('landing', null, {layout: 'welcome'})
    }
  })

  server.route({
    method: 'GET',
    path: '/options',
    handler: function (request, reply) {
      reply.view('options', null, {layout: 'welcome'})
    }
  })

  server.route({
    method: 'GET',
    path: '/listen',
    handler: function (request, reply) {
      reply.view('listen')
    }
  })

  server.route({
    method: 'GET',
    path: '/public/{param*}',
    handler: {
      directory: {
        path: Path.join(__dirname,'/../public/')
      }
    }
  })

  server.start((error) => {
    if (error) {
      throw error
    }
    console.log('Server running at:', server.info.uri)
  })
})

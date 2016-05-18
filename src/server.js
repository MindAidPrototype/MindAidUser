'use strict'

const Hapi = require('hapi')
const http = require('http')

const BASE_URL = 'https://api.github.com'

const server = new Hapi.Server()
server.connection({ port: 3001 })

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello, server1!')
  }
})

server.route({
  method: 'GET',
  path: '/test',
  handler: function (request, reply) {
    const options = {
      hostname: BASE_URL,
      method: 'GET',
      path: '/'
    }
    var replying = ''
    const req = http.request(options, res => {
      console.log(res.headers, '<<<<<res')
      res.on('data', chunk => {
        replying += chunk
      })
      res.on('end', () => {
        reply(replying)
      })
    })
    req.end()
  }
})

server.start((err) => {
  if (err) {
    throw err
  }
  console.log('Server running at:', server.info.uri)
})

const Hapi = require('hapi')
const http = require('http')

const BASE_URL = 'mindaidadmin.herokuapp.com'

const server = new Hapi.Server()
server.connection({ port: 3000 })

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
      path: '/sayhello'
    }
    var replying = ''
    const req = http.request(options, res => {
      res.on('data', chunk => {
        console.log(chunk)
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

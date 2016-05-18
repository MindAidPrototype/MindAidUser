const Hapi = require('hapi')
const http = require('http')

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

server.start((err) => {
  if (err) {
    throw err
  }
  console.log('Server running at:', server.info.uri)
})

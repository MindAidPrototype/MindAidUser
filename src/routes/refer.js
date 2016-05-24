var http = require('http')

module.exports = {
  method: 'get',
  path: '/refer',
  handler: (request, reply) => {
    var replying = ''
    const options = {
      method: 'GET',
      hostname: 'localhost',
      port: 4000,
      path: '/referapi'
    }
    const req = http.request(options, res => {
      res.on('data', chunk => {
        replying += chunk
      })
      res.on('end', () => {
        reply.view('refer', { refer: JSON.parse(replying) })
      })
    })
    req.end()
  }
}

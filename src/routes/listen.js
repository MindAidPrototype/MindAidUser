var http = require('http')

module.exports = {
  method: 'get',
  path: '/listen',
  handler: (request, reply) => {
    var replying = ''
    const options = {
      method: 'GET',
      hostname: 'localhost',
      port: 4000,
      path: '/listenapi'
    }
    const req = http.request(options, res => {
      res.on('data', chunk => {
        replying += chunk
      })
      res.on('end', () => {
        reply.view('listen', { listen: JSON.parse(replying) })
      })
    })
    req.end()
  }
}

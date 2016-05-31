const http = require('http')

module.exports = {
  method: 'get',
  path: '/about',
  handler: (request, reply) => {
    var replying = ''
    const options = {
      method: 'GET',
      hostname: 'localhost',
      port: 4000,
      path: '/aboutapi'
    }
    const req = http.request(options, res => {
      res.on('data', chunk => {
        replying += chunk
      })
      res.on('end', () => {
        console.log(replying)
        reply.view('about', { about: JSON.parse(replying) })
      })
    })
    req.end()
  }
}

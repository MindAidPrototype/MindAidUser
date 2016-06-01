const http = require('http')

module.exports = {
  method: 'get',
  path: '/learn',
  handler: (request, reply) => {
    var replying = ''
    const options = {
      method: 'GET',
      hostname: 'mindaidadmin.herokuapp.com',
      path: '/learnapi'
    }
    const req = http.request(options, res => {
      res.on('data', chunk => {
        replying += chunk
      })
      res.on('end', () => {
        reply.view('learn', { learn: JSON.parse(replying)})
      })
    })
    req.end()
  }
}

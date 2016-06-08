const http = require('http')

module.exports = {
  method: 'get',
  path: '/learn/{index}',
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
        const parsedReply = JSON.parse(replying)
        reply.view('learnMore', { learn: parsedReply[request.params.index]})
      })
    })
    req.end()
  }
}

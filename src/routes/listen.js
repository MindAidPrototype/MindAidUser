const http = require('http')

module.exports = {
  method: 'get',
  path: '/listen',
  handler: (request, reply) => {
    var replying = ''
    const options = {
      method: 'GET',
      hostname: 'mindaidadmin.herokuapp.com',
      path: '/listenapi'
    }
    const req = http.request(options, res => {
      res.on('data', chunk => {
        replying += chunk
      })
      res.on('end', () => {
        reply.view('listen', {conversationStarters: JSON.parse(replying) })
      })
    })
    req.end()
  }
}

const http = require('http')

module.exports = {
  method: 'get',
  path: '/refer',
  handler: (request, reply) => {
    var replying = ''
    const options = {
      method: 'GET',
      hostname: 'mindaidadmin.herokuapp.com',
      path: '/referapi'
    }
    const req = http.request(options, res => {
      res.on('data', chunk => {
        replying += chunk
      })
      res.on('end', () => {
        const re = JSON.parse(replying)
        reply.view('refer', { refer: {national: re[0], school: re[1], community: re[2], selfReferral: re[3]}})
      })
    })
    req.end()
  }
}

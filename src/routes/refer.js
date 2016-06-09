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
        const obj = {}
        re.forEach((el => {
          switch (el.identifier) {
          case 'national': obj.national = el
            break
          case 'school': obj.school = el
            break
          case 'community': obj.community = el
            break
          case 'selfReferral': obj.selfReferral = el
            break
          }
        }))
        reply.view('refer', {refer: obj})
      })
    })
    req.end()
  }
}

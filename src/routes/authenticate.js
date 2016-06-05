const client = require('../redis/client.js')

module.exports = {
  method: 'post',
  path: '/authenticate',
  handler: (request, reply) => {
    const username = JSON.parse(request.payload).user
    const password = JSON.parse(request.payload).pass
    client.keys('*', (error, res) => {
      if (res.indexOf(username) > -1) {
        client.hgetall(username, (error2, res2) => {
          res2.p === password ?
            reply('1').state('cookie', username) :
              reply('wrong password')
        })
      }
      else {
        reply('wrong username')
      }
    })
  }
}

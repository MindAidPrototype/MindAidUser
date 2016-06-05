const client = require('../redis/client.js')

module.exports = newUserSecret => ({
  method: 'post',
  path: '/createNewUser',
  handler: (request, reply) => {
    const apiRequest = request.payload
    const user = apiRequest.user
    const password = apiRequest.pass
    if(apiRequest.newUserSecret === newUserSecret) {
      client.hmset(user, 'p', password, (err, res) => {
        if(err) throw err
        reply(res)
      })
    } else {
      reply('unlucky')
    }
  }
})

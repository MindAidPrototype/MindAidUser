const client = require('../redis/client.js')

module.exports = {
  method: 'get',
  path: '/remind',
  handler: (request, reply) => {
    const user = request.state.cookie
    if(user) {
      client.hgetall(user, (err, res) => {
        if(Object.keys(res).indexOf('s') > -1) { 
          reply.view('remind', {
            remind: JSON.parse(res.s)
          })
        } else {
          reply.view('remind')
        }
      })
    } else {
      reply.redirect('/login')
    }
  }
}

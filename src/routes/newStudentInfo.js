const client = require('../redis/client.js')

module.exports = {
  method: 'post',
  path: '/newStudentInfo',
  handler: (request, reply) => {
    client.hgetall(request.state.cookie, (err, res) => {
      if(Object.keys(res).indexOf('s') > -1) {
        client.hget(request.state.cookie, 's', (err2, res2) => {
          client.hmset(request.state.cookie, 's', JSON.stringify(JSON.parse(res2).concat([JSON.parse(request.payload)])), () => {
            reply(1)
          })
        })  
      } else {
        client.hmset(request.state.cookie, 's', JSON.stringify([JSON.parse(request.payload)]), () => {
          reply(1)
        })
      }
    })
  }
}

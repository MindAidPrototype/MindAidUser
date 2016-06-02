module.exports = (client) => ({
  method: 'get',
  path: '/remind',
  handler: (request, reply) => {
    const user = request.state.cookie
    if(user) {
      client.hgetall(user, (err, res) => {
        reply.view('remind', {
          remind: JSON.parse(res.s)
        })
      })
    } else {
      reply.redirect('/login')
    }
  }
})

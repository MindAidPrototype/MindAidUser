module.exports = (client) => ({
  method: 'get',
  path: '/createNewUser/{username}/{password}',
  handler: (request, reply) => {
    const user = request.params.username
    const password = request.params.password
    client.hmset(user, 'p', password, (err, res) => {
      if(err) throw err
      reply(res)
    })
  }
})

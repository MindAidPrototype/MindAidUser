module.exports = {
  method: 'get',
  path: '/login',
  handler: (request, reply) => {
    reply.view('login')
  }
}

module.exports = (client) => ({
  method: 'get',
  path: '/remind',
  handler: (requst, reply) => {
    reply.view('remind')
  }
})

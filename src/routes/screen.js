module.exports = {
  method: 'get',
  path: '/screen',
  handler: (requst, reply) => {
    reply.view('screen')
  }
}

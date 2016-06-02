module.exports = {
  method: 'get',
  path: '/logout',
  handler: (request, reply) => {
    reply(1).state('cookie', null, {ttl: 0})
  }
}

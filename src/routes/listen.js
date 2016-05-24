module.exports = {
  method: 'get',
  path: '/listen',
  handler: (requst, reply) => {
    reply.view('listen', {
      about: [
        {
          subtitle: 'Title 1',
          paragraph: 'Lorem Ipsum'
        },
        {
          subtitle: 'Title 2',
          paragraph: 'Lorem Ipsum sexy Petal'
        }
      ]
    })
  }
}

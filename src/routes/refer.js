module.exports = {
  method: 'get',
  path: '/refer',
  handler: (requst, reply) => {
    reply.view('refer', {
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

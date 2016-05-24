module.exports = {
  method: 'get',
  path: '/learn',
  handler: (requst, reply) => {
    reply.view('learn', {
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

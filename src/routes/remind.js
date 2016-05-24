module.exports = {
  method: 'get',
  path: '/remind',
  handler: (requst, reply) => {
    reply.view('remind', {
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

module.exports = {
  method: 'get',
  path: '/questions',
  handler: (requst, reply) => {
    reply.view('questions', {
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

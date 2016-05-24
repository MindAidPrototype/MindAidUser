const Hapi = require('hapi')
const Path = require('path')
const handlebars = require('handlebars')
const port = process.env.PORT || 3000

const server = new Hapi.Server()

server.connection({port})

server.register([require('vision'), require('inert')], err => {
  if (err) throw err
  server.views({
    engines: {html: handlebars},
    relativeTo: __dirname + '/../',
    path: './views',
    layoutPath: './views/layout',
    layout: 'default',
    //partialsPath: './views/partials/'
  })

  server.route([{
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply.view('index')
    }
  },
  {
    method: 'get',
    path: '/about',
    handler: (request, reply) => {
      reply.view('about', {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
    method: 'GET',
    path: '/public/{param*}',
    handler: {
      directory: {
        path: Path.join(__dirname,'/../public/')
      }
    }
  }])

  server.start(error => {
    if (error) throw error
    console.log('Server running at:', server.info.uri)
  })
})

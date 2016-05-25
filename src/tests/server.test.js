const tape = require('tape')
const server = require('../server.js')

const endpoints = ['index', 'about', 'learn', 'listen', 'questions', 'refer', 'remind']
const content = [
  'id="homeList"',
  'about',
  'learn',
  'listen',
  'questions',
  'refer',
  'remind'
]

const combined = endpoints.map((endpoint, i) => ({endpoint, content: content[i]}))

const testEndpoint = endpoint => {
  tape('get request to ' + endpoint.endpoint, t => {
    const options = {
      method: 'get',
      url: 'index' === endpoint.endpoint ? '/' : '/' + endpoint.endpoint
    }
    server.inject(options, res => {
      const actual1 = res.statusCode
      const expected1 = 200
      const actual2 = res.payload.indexOf('href="../../public/css/main.css"') > -1
      const actual3 = res.payload.indexOf(endpoint.content) > -1
      t.equal(actual1, expected1, '200 status code')
      t.ok(actual2, 'renders the default layout')
      t.ok(actual3, 'renders the ' + endpoint.endpoint + ' page')
      t.end()
    })
  })
}

combined.forEach(el => testEndpoint(el))



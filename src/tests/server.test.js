const tape = require('tape')
const server = require('../server.js')
const client = require('../redis/client.js')

const endpoints = ['index', 'about', 'learn', 'screen', 'refer']
const content = [
  '<a href="/listen"',
  'A</span>',
  'L</span>',
  'S</span>',
  'R</span>',
]

const combined = endpoints.map((endpoint, i) => ({endpoint, content: content[i]}))

const testEndpoint = endpoint => {
  tape('get request to ' + endpoint.endpoint, t => {
    const options = {
      method: 'get',
      url: 'index' === endpoint.endpoint ? '/' : '/' + endpoint.endpoint
    }
    server.inject(options, res => {
      t.equal(res.statusCode, 200, 'finds the page')
      t.ok(res.payload.indexOf('href="../../public/css/main.css"') > -1, 'renders the default layout')
      t.ok(res.payload.indexOf(endpoint.content) > -1, 'renders the ' + endpoint.endpoint + ' page')
      t.end()
    })
  })
}

combined.forEach(el => testEndpoint(el))

tape('tests params* route to see if it findes the correct public files', t => {
  var options1 = {
    method: 'get',
    url: '/public/css/main.css'
  }
  server.inject(options1, res => {
    const actual1 = res.statusCode
    const expected1 = 200
    const actual2 = res.payload.indexOf('background') > -1
    t.equal(actual1, expected1)
    t.ok(actual2)
    t.end()
  })
})

tape('teardown', t => {
  server.stop()
  client.quit()
  t.end()
})

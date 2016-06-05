const redis = require('redis')

const redisURL = process.env.REDIS_URL || '//localhost:6379'

const client = redis.createClient(redisURL)

module.exports = client

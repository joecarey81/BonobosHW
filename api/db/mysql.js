'use strict'

const knex = require('knex')

const db = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: 'bonobos'
    }
})

module.exports = {
    db: db
}
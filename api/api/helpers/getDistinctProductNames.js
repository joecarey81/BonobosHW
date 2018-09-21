'use strict'

const db = require('../../db/mysql').db
const _ = require('lodash')

module.exports = async () => {
    const names = await db.from('products').distinct('product_name').select()
    return names
}
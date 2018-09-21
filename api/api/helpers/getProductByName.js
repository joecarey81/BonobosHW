'use strict'

const db = require('../../db/mysql').db
const _ = require('lodash')

module.exports = async (name) => {
    const product = await db.from('products')
        .where('product_name', name)
    //    .leftOuterJoin('styles', 'products.product_id', 'styles.product_id')
    return _.first(product)
}
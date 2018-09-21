'use strict'

const db = require('../../db/mysql').db

module.exports = async (productId) => {
    if (!productId) return []

    const styles = await db.from('inventory').where('product_id', productId).select(['waist', 'length', 'style', 'count'])
    return styles
}
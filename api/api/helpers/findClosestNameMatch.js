'use strict'

const _ = require('lodash')
const getDistinctProductNames = require('./getDistinctProductNames')
const getEditDistance = require('./getEditDistance')

module.exports = async (name) => {
    let names = await getDistinctProductNames()
    names = _.sortBy(names, n => getEditDistance(name.toLowerCase(), n.product_name.toLowerCase()))
    const closest = _.first(names)

    return _.get(closest, 'product_name')
}
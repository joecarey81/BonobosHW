'use strict'

const _ = require('lodash')
const wrap = require('express-async-wrap')
const getProductByName = require('../helpers/getProductByName')
const getStyles = require('../helpers/getStyles')
const transformStyles = require('../helpers/transformStyles')
const findClosestNameMatch = require('../helpers/findClosestNameMatch')

module.exports = wrap(async (request, response) => {
    const name = _.get(request, 'swagger.params.name.value')

    if (!name || _.isEmpty(name.trim())) {
        response.status(204).json()
        return
    }

    try {
        let product = await getProductByName(name)
        if (_.isEmpty(product)) {
            // find closest match
            const closestMatch = await findClosestNameMatch(name)
            product = await getProductByName(closestMatch)
        }

        product.styles = await getStyles(product.product_id)

        product.totalInventory = _.reduce(product.styles, (sum, style) => {
            return sum + style.count
        }, 0)

        response.json(product)
    }
    catch (err) {
        response.status(500).json({
            message: err.message
        })
    }
})
'use strict'

const _ = require('lodash')

/*
 return [ {
            styleName: [ {waist: int, length: int, count: int}, ...],
          }, ...
        ]
 */

module.exports = (styles) => {
    return _.chain(styles)
        .groupBy('style')
        .map((styles, styleName) => {
            return {
                name: styleName,
                styles: styles
            }
        })
        .value()
}
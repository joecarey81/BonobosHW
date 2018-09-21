'use strict';

require('dotenv').config()

const SwaggerExpress = require('swagger-express-mw')
const app = require('express')()
module.exports = app // for testing

const config = {
    appRoot: __dirname // required config
}

SwaggerExpress.create(config, function(err, swaggerExpress) {
    if (err) { throw err }

    // install middleware
    swaggerExpress.register(app)

    const port = process.env.PORT || 10010
    app.listen(port)

    if (swaggerExpress.runner.swagger.paths['/products']) {
        console.log('try this:\ncurl http://127.0.0.1:' + port + '/products?name=washed%20chinos')
    }
})

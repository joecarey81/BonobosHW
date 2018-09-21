const should = require('should')
const request = require('supertest')
const server = require('../../../app')

const getEditDistance = require('../../../api/helpers/getEditDistance')

describe('helpers', () => {
    describe('getEditDistance', () => {
        // r = replace
        // i = insert
        describe('compare washed chimps to washed chinos', () => {
            it('should return 2', (done) => {
                // washed chimps
                //           rr
                // washed chinos
                const distance = getEditDistance('washed chimps', 'washed chinos')
                should.equal(distance, 2)
                done()
            })
        })

        describe('compare whip to washed chinos', () => {
            it('should return 10', (done) => {
                // w  h     i  p
                //  ii iiiii iir
                // washed chinos
                const distance = getEditDistance('whip', 'washed chinos')
                should.equal(distance, 10)
                done()
            })
        })

        describe('compare whip to jetsetter jeans', () => {
            it('should be >= 10', (done) => {
                const distance = getEditDistance('whip', 'jetsetter jeans')
                distance.should.be.greaterThanOrEqual(10)
                done()
            })
        })

        describe('compare whip to travel jeans', () => {
            it('should be >= 10', (done) => {
                const distance = getEditDistance('whip', 'travel jeans')
                distance.should.be.greaterThanOrEqual(10)
                done()
            })
        })

        describe('compare whip to fireside flannels', () => {
            it('should be >= 10', (done) => {
                const distance = getEditDistance('whip', 'fireside flannels')
                distance.should.be.greaterThanOrEqual(10)
                done()
            })
        })
    })
})

describe('controllers', () => {

    describe('getProduct', () => {

        describe('GET /products with no product name', () => {
            it('should return 204, no data', (done) => {

                request(server)
                    .get('/products')
                    .set('Accept', 'application/json')
                    .expect(204)
                    .end((err) => {
                        should.not.exist(err)
                        done()
                    })
            })

        })

        describe('GET /products with product name blank string', () => {
            it('should return 204, no data', (done) => {

                request(server)
                    .get('/products')
                    .query({
                        name: "    "
                    })
                    .set('Accept', 'application/json')
                    .expect(204)
                    .end((err) => {
                        should.not.exist(err)
                        done()
                    })
            })

        })

        describe('GET /products with existing product name', () => {
            it('should return product', (done) => {

                const name = 'washed chinos'
                const id = 1

                request(server)
                    .get('/products')
                    .query({
                        name: name
                    })
                    .set('Accept', 'application/json')
                    .expect(200)
                    .end((err, res) => {
                        should.not.exist(err)
                        res.body.product_id.should.equal(id)
                        res.body.product_name.should.equal(name)
                        done()
                    })
            })

        })

        describe('GET /products with name closest to "washed chimps"', () => {
            it('should return product', (done) => {

                const name = 'washed chinos'
                const id = 1

                request(server)
                    .get('/products')
                    .query({
                        name: name
                    })
                    .set('Accept', 'application/json')
                    .expect(200)
                    .end((err, res) => {
                        should.not.exist(err)
                        res.body.product_id.should.equal(id)
                        res.body.product_name.should.equal(name)
                        done()
                    })
            })

        })

        describe('GET /products with name closest to "wish"', () => {
            it('should return product', (done) => {

                const name = 'washed chinos'
                const id = 1

                request(server)
                    .get('/products')
                    .query({
                        name: name
                    })
                    .set('Accept', 'application/json')
                    .expect(200)
                    .end((err, res) => {
                        should.not.exist(err)
                        res.body.product_id.should.equal(id)
                        res.body.product_name.should.equal(name)
                        done()
                    })
            })

        })
    })

})

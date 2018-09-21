import React from "react"
import { connect } from 'react-redux'


const ProductImage = (({ product }) => (
    <img
        className='product-image column'
        alt={product.product_name}
        src={product.product_image}
    />
))

const mapStateToProps = state => ({
    product: state.products.product
})

export default connect(
    mapStateToProps
)(ProductImage)
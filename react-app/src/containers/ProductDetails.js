import React from "react"
import { connect } from 'react-redux'
import ProductImage from './ProductImage'

const ProductDetails = ({ product }) => (
    product ? <div>
            <div className="product-name">
                {product.product_name}
            </div>
            <div className="product-details row">
                <ProductImage />
                <div className="product-description column">
                    <div>{product.product_description}</div>
                </div>
            </div>
        </div>
        : ""
)

const mapStateToProps = state => ({
    product: state.products.product
})

export default connect(
    mapStateToProps
)(ProductDetails)

//export default ProductDetails
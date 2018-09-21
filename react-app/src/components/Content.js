import React from "react"
import ProductDetails from '../containers/ProductDetails'
import InventoryDetails from '../containers/InventoryDetails'

const Content = () => (
    <div className="content">
        <ProductDetails/>
        <InventoryDetails/>
    </div>
);

export default Content
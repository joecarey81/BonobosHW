import React from "react"
import { connect } from 'react-redux'

const InventoryDetails = ({ product }) => (
    product ?
        <div className="inventory-detail">
            <table key="inventory-table">
                <thead>
                <tr>
                    <th>Waist</th>
                    <th>Length</th>
                    <th>Style</th>
                    <th>Count</th>
                </tr>
                </thead>
                {createTable(product)}
            </table>
        </div>
        : ""
)

const mapStateToProps = state => ({
    product: state.products.product
})

export default connect(
    mapStateToProps
)(InventoryDetails)

const createTable = (product) => {
    let table = []
    let rows = []

    for (let i = 0; i < product.styles.length; i++) {
        let tbody = []
        //Inner loop to create children
        tbody.push(<td key={`r${i}c0`}>{product.styles[i].waist}</td>)
        tbody.push(<td key={`r${i}c1`}>{product.styles[i].length}</td>)
        tbody.push(<td key={`r${i}c2`}>{product.styles[i].style.trim()}</td>)
        tbody.push(<td key={`r${i}c3`}>{product.styles[i].count}</td>)

        //Create the parent and add the children
        rows.push(<tr key={(i+1).toString()}>{tbody}</tr>)
    }

    table.push(<tbody key={"tbody"}>{rows}</tbody>)

    return table
}
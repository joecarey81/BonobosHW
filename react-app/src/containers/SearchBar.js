import React from "react"
import { connect } from 'react-redux'
import { setProduct } from '../actions/index'
import axios from 'axios'
import _ from 'lodash'

const SearchBar = ({dispatch}) => {
    let input

    return (
        <div className="search">
            <form onSubmit={e => {
                e.preventDefault()
                getProductByName(dispatch, input.value)
            }}>
                <input
                    ref={node => input = node}
                    type="search"
                    id="search"
                    placeholder="Search By Product Name" />
                <button>Search</button>
            </form>
        </div>
    )
}

export default connect()(SearchBar)

function getProductByName(dispatch, name) {
    axios.get('http://127.0.0.1:10010/products', {
        params: {
            name: name
        }
    }).then((response) => {
        switch (response.status) {
            case 200:
                dispatch(setProduct(response.data))
                break;
            default:
                // 204: no data
                break;
        }
    }).catch((err) => {
        alert(_.get(err, 'message', 'Server Error'))
    })
}
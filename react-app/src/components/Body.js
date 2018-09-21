import React from 'react'
import SearchBar from '../containers/SearchBar'
import Content from './Content'

const Body = () => (
    <div>
        <div className="search">
            <SearchBar/>
        </div>
        <div className="body">
            <Content />
        </div>
    </div>
)

export default Body

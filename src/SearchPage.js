import React from 'react';
import './Searchpage.css'
import {Button} from '@material-ui/core'


function SearchPage() {
    return (
        <div className='searchpage'>
        <div className="searchPage_info">
            <p>62stays. 26august to30 august .2guest</p>
            <h1>Nearby Stays</h1>
            <Button variant="outlined">Cancellation Fexibility</Button>
            <Button variant="outlined">Type of Place</Button>
            <Button variant="outlined">Price</Button>
            <Button variant="outlined">Rooms And Beds</Button>
            <Button variant="outlined"> More Filter</Button>
        </div>
            
        </div>
    )
}

export default SearchPage

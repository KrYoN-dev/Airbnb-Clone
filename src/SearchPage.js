import React from 'react';
import './Searchpage.css'
import {Button} from '@material-ui/core'
import Searchresult from './Searchresult';


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
            <Searchresult
                img="https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=20&m=1026205392&s=612x612&w=0&h=lYFMV5cOuQQpddmwsE5QLBCyhgWQ1OI46i_dalro9OE="
                location="Private Room in center of London"
                title="Stay at spacious Edward Homes"
                description="1guest . 1bedroom . 1bed . 1.5 shared bathrooms . Wifi .Kitchen"
                star={4.73}
                price="Rs.3600"
                total="Rs10000"
            />
            <Searchresult
                img="https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=20&m=1026205392&s=612x612&w=0&h=lYFMV5cOuQQpddmwsE5QLBCyhgWQ1OI46i_dalro9OE="
                location="Private Room in center of London"
                title="Stay at spacious Edward Homes"
                description="1guest . 1bedroom . 1bed . 1.5 shared bathrooms . Wifi .Kitchen"
                star={4.73}
                price="Rs.3600"
                total="Rs10000"
            />
            <Searchresult
                img="https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=20&m=1026205392&s=612x612&w=0&h=lYFMV5cOuQQpddmwsE5QLBCyhgWQ1OI46i_dalro9OE="
                location="Private Room in center of London"
                title="Stay at spacious Edward Homes"
                description="1guest . 1bedroom . 1bed . 1.5 shared bathrooms . Wifi .Kitchen"
                star={4.73}
                price="Rs.3600"
                total="Rs10000"
            />
        </div>
            
        </div>
    )
}

export default SearchPage

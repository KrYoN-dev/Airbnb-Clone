import React,{useState} from 'react';
import './banner.css';
import {Button} from "@material-ui/core"
import Search from './Search';
import {useNavigate} from 'react-router-dom'

function Banner() {
    const navigate= useNavigate();

    const [showSearch, setShowSearch] =useState(false);

    return (
       
        
        <div className='banner'>
         <div className="banner_search">
         {showSearch && <Search/>}
            <Button onClick={()=> setShowSearch(!showSearch)}  className='banner_searchbutton' variant='outlined'>{showSearch ? "Hide" : "Search Dates"}</Button>
            </div>
         
    <div className="banner_info">
            <h1>Get out of stretch your imagination</h1>
            <h5>Plan a diffrent kind of getway to uncover  the hidden gems near you</h5>
            <Button variant='outlined ' onClick={()=>navigate('/search')}> Explore Nearby</Button>

            </div>
        </div>
    )
}

export default Banner;

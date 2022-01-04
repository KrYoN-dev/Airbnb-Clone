import React from 'react';
import './Header.css';
import  { ExpandMore, Language, Search } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import{Link} from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
        <Link to="/">
            <img src="https://blogravenridgecottages.files.wordpress.com/2021/04/airbnb-logo.jpeg" className='header_icon' alt="" />
        </Link>


            <div className="header_center">
                <input type="text" name="" id="" />
                <Search/>
            
            </div>

            <div className="header_right">
                <p>Become a Host</p>
                <Language/>
                <ExpandMore/>
                <Avatar/>
            </div>
        </div>

    )
}

export default Header;

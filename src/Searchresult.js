import React from 'react';
import './searchresult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';

function Searchresult({
    img,
    location,
    title,
    description,
    star,
    price,
    total
}) {
    return (
        <div className='searchresult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className='searchresult_heart'/>
            <div className="searchresult_info">
                <div className="infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>
                <div className="infoBottom">
                    <div className="searchresult_star">
                    <StarIcon className='search_star'/>
                    <p>
                   
                        <strong>{star}</strong>
                    </p>
                    </div>
                    <div className="searchresult_price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Searchresult;

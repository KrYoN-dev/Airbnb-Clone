import React from 'react';
import Banner from './Banner';
import './home.css'
import Card from './Card'

function Home() {
    return (
        <div className='home'>
        <Banner/>

        <div className="home_section">
            <Card src='https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=857&q=80' title="Entire Home" description="Comfortable pricate places,with rooms for friends and family"/>
            <Card src='https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=857&q=80' title="Comfiy Stays" description="Comfortable pricate places,with rooms for friends and family"/>
            <Card src='https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=857&q=80' title="Entire Villa" description="Comfortable pricate places,with rooms for friends and family"/>
        </div>
        <div className="home_section">
        <Card src='https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=857&q=80' title="Entire Home" description="Comfortable pricate places,with rooms for friends and family" price='Rs.2500/night'/>
            <Card src='https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=857&q=80' title="Comfiy Stays" description="Comfortable pricate places,with rooms for friends and family" price='Rs.2500/night'/>
            <Card src='https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=857&q=80' title="Entire Villa" description="Comfortable pricate places,with rooms for friends and family" price='Rs.2500/night'/>
        </div>
            
        </div>
    )
}

export default Home;

import React from 'react';
import Sidebar from '../../companents/Sidebar/sidebar';
import Card from "../../companents/RaskCards/taskCard"
import "./home.css"
const HomePage = () => {
    return (
        <>
        <div className='homeContainer bg-dark'>
               <Sidebar/>
                <div className="homeBody">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                </div>
        </div>
        </>
    );
};

export default HomePage;
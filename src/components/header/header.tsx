import React from 'react'
import netflixLogo from '@images/netflix.png';
import './header.scss';

export const Header = () => {
    return (
        <div className="header">
            <div className="left-header">
                <img src={netflixLogo}
                    className="netflix-logo"
                    alt="Netflix"></img>
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>Recently Added</li>
                    <li>My List</li>
                </ul>
            </div>

            <div className="right-header">
            </div>
        </div>
    )
}

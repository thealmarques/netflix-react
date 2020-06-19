import React from 'react';
import './profile.scss';
import netflixLogo from '@images/netflix.png';

export const Profile = () => {
    return (
        <div className="header">
            <img src={netflixLogo}
                className="netflix-logo"
                alt="Netflix"></img>
        </div>
    )
}

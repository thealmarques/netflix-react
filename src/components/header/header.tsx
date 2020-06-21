import React, { useState, useRef } from 'react'
import netflixLogo from '@images/netflix.png';
import searchWhite from '@images/search-white.png';
import giftWhite from '@images/gift-white.png';
import bellWhite from '@images/bell-white.png';
import './header.scss';
import onOutsideClick from '../../shared/components/onClickOutside/on-click-outside';

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
                <Search />
                <img src={giftWhite}
                    className="gift-icon"
                    alt="Refer"></img>
                <img src={bellWhite}
                    className="bell-icon"
                    alt="Notification"></img>
            </div>
        </div>
    )
}

function Search() {
    const ref = useRef() as React.MutableRefObject<HTMLInputElement>;;
    const [searchActive, setSearchActive] = useState(false);
    onOutsideClick(ref, () => {
        if (searchActive) {
            setSearchActive(!searchActive);
        }
    });

    if (!searchActive) {
        return (
            <img onClick={() => setSearchActive(!searchActive)} src={searchWhite}
                className="search-icon"
                alt="Search"></img>
        );
    } else {
        return (
            <input ref={ref} className="search-input" placeholder="Titles, people, genres" />
        )
    }
}
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
    const [searchBarClass, setSearchBarClass] = useState('search-bar');
    const [searchInputClass, setSearchInputClass] = useState('search-input');

    onOutsideClick(ref, () => {
        if (searchActive) {
            setSearchActive(!searchActive);
            setClassBasedOnSearch();
        }
    });

    const setClassBasedOnSearch = () => {
        if (!searchActive) {
            setSearchBarClass('search-bar active');
            setSearchInputClass('search-input active')
        } else {
            setSearchInputClass('search-input');
            setTimeout(() => {
                setSearchBarClass('search-bar');
            }, 500);
        }
    }


    return (
        <div className={searchBarClass}>
            <img onClick={() => {
                setClassBasedOnSearch();
                setSearchActive(!searchActive);
            }} src={searchWhite}
                className="search-icon"
                alt="Search"></img>
            <input ref={ref} className={searchInputClass} placeholder="Titles, people, genres" />
        </div>
    )
}
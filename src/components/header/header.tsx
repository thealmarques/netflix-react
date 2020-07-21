import React, { useState, useRef } from 'react'
import netflixLogo from '@images/netflix.png';
import searchWhite from '@images/search-white.png';
import giftWhite from '@images/gift-white.png';
import bellWhite from '@images/bell-white.png';
import arrowUp from '@images/arrow-up-white.png';
import avatar1 from '@images/avatar.png';
import avatar2 from '@images/avatar2.png';
import './header.scss';
import onOutsideClick from '../../shared/components/onClickOutside/on-click-outside';
import { useSelector } from 'react-redux';
import { RootState } from 'shared/interfaces/root-state.interfaces';

export const Header = () => {
    const username = useSelector((state: RootState) => state.user.username);
    return (
        <div className="header">
            <div className="header__left-menu">
                <img src={netflixLogo}
                    className="header__left-menu-logo"
                    alt="Netflix"></img>
                <ul hidden={username.length === 0} className="header__left-menu-list">
                    <li className="header__left-menu-list_text header__left-menu-list_active">Home</li>
                    <li className="header__left-menu-list_text">TV Shows</li>
                    <li className="header__left-menu-list_text">Movies</li>
                    <li className="header__left-menu-list_text">Recently Added</li>
                    <li className="header__left-menu-list_text">My List</li>
                </ul>
                <div hidden={username.length === 0} className="header__left-menu-dropdown">
                    Search
                    <img src={arrowUp}
                        className="header__left-menu-dropdown_icon"
                        alt="Refer"></img>
                </div>
            </div>

            <div hidden={username.length === 0} className="header__right-menu">
                <Search />
                <img src={giftWhite}
                    className="header__right-menu_gift-icon"
                    alt="Refer"></img>
                <div className='header__right-menu__notification-container'>
                    <img src={bellWhite}
                        className="header__right-menu_bell-icon"
                        alt="Notification">
                    </img>
                    <div className="header__right-menu__notification-container__notification-area">
                        <div className="header__right-menu__notification-container__notification-area__arrow-up">
                            <img src={arrowUp}
                                className="header__right-menu__notification-container__notification-area__arrow-up_icon"
                                alt="Refer"></img>
                        </div>
                        <div className="header__right-menu__notification-container__notification-area__list">
                            No recent notifications
                        </div>
                    </div>
                </div>
                <div className="header__right-menu__avatar-container">
                    <img className="header__right-menu__avatar-container_icon" src={avatar1} alt="Avatar" />
                    <img src={arrowUp}
                        className="header__right-menu__avatar-container_arrow-down"
                        alt="Refer"></img>
                    <div className="header__right-menu__avatar-container__options">
                        <img src={arrowUp}
                            className="header__right-menu__avatar-container__options_arrow-up"
                            alt="Refer"></img>
                        <div className="header__right-menu__avatar-container__options__list-options">
                            <div className="header__right-menu__avatar-container__options__list-options__row">
                                <img className="header__right-menu__avatar-container__options__list-options__row_icon" src={avatar1} alt="Avatar" />
                                <span className="header__right-menu__avatar-container__options__list-options__row_text">James Peterson</span>
                            </div>
                            <div className="header__right-menu__avatar-container__options__list-options__row">
                                <img className="header__right-menu__avatar-container__options__list-options__row_icon" src={avatar2} alt="Avatar" />
                                <span className="header__right-menu__avatar-container__options__list-options__row_text">Holland Maggie</span>
                            </div>
                            <span className="header__right-menu__avatar-container__options__list-options_manage-profiles">Manage profiles</span>
                            <div className="header__right-menu__avatar-container__options__list-options_separator"></div>
                            <span className="header__right-menu__avatar-container__options__list-options_settings-option">Account</span>
                            <span className="header__right-menu__avatar-container__options__list-options_settings-option">Help Center</span>
                            <span className="header__right-menu__avatar-container__options__list-options_settings-option">Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Search() {
    const ref = useRef() as React.MutableRefObject<HTMLInputElement>;;
    const [searchActive, setSearchActive] = useState(false);
    const [searchBarClass, setSearchBarClass] = useState('header__right-menu_search-bar');
    const [searchInputClass, setSearchInputClass] = useState('header__right-menu_search-input');

    onOutsideClick(ref, () => {
        if (searchActive) {
            setSearchActive(!searchActive);
            setClassBasedOnSearch();
        }
    });

    const setClassBasedOnSearch = () => {
        if (!searchActive) {
            setSearchBarClass('header__right-menu_search-bar header__right-menu_search-bar_active');
            setSearchInputClass('header__right-menu_search-input header__right-menu_search-input_active')
        } else {
            setSearchInputClass('header__right-menu_search-input');
            setTimeout(() => {
                setSearchBarClass('header__right-menu_search-bar');
            }, 500);
        }
    }


    return (
        <div className={searchBarClass}>
            <img onClick={() => {
                setClassBasedOnSearch();
                setSearchActive(!searchActive);
            }} src={searchWhite}
                className="header__right-menu_search-icon"
                alt="Search"></img>
            <input ref={ref} className={searchInputClass} placeholder="Titles, people, genres" />
        </div>
    )
}
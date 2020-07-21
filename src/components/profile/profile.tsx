import React from 'react';
import './profile.scss';
import { Header } from '../header/header';
import avatar1 from '@images/avatar.png';
import avatar2 from '@images/avatar2.png';
import plusIcon from '@images/plus.png';
import { setUser } from '../../shared/store/actions/user.actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

export const Profile = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div className="profile">
            <Header></Header>
            <div className="profile__container">
                <span className="profile__container_title">Who's watching?</span>
                <div className="profile__container__choose-container">
                    <div className="profile__container__choose-container__option">
                        <img className="profile__container__choose-container__option_icon" src={avatar1} alt="Avatar" />
                        <span className="profile__container__choose-container__option_text">James Peterson</span>
                    </div>
                    <div onClick={() => {
                        dispatch(setUser({
                            username: 'Holland Maggie'
                        }));
                        history.push('/main');
                    }}
                        className="profile__container__choose-container__option">
                        <img className="profile__container__choose-container__option_icon" src={avatar2} alt="Avatar" />
                        <span className="profile__container__choose-container__option_text">Holland Maggie</span>
                    </div>
                    <div className="profile__container__choose-container__option">
                        <img className="profile__container__choose-container__option_icon" src={avatar2} alt="Avatar" />
                        <span className="profile__container__choose-container__option_text">Holland Maggie</span>
                    </div>
                    <div className="profile__container__choose-container__option">
                        <img className="profile__container__choose-container__option_plus-icon" src={plusIcon} alt="Add profile" />
                        <span className="profile__container__choose-container__option_text">Add profile</span>
                    </div>
                </div>
                <div className="profile__container_manage-container">
                    Manage Profiles
                </div>
            </div>
        </div>
    )
}

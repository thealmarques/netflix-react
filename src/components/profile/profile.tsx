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
        <div className="profile-container">
            <Header></Header>
            <div className="content-container">
                <span className="profile-title">Who's watching?</span>
                <div className="choose-container">
                    <div className="choose-option">
                        <img className="choose-avatar-icon" src={avatar1} alt="Avatar" />
                        <span className="choose-text">James Peterson</span>
                    </div>
                    <div onClick={() => {
                        dispatch(setUser({
                            username: 'Holland Maggie'
                        }));
                        console.log(history);
                        history.push('/main');
                    }}
                        className="choose-option">
                        <img className="choose-avatar-icon" src={avatar2} alt="Avatar" />
                        <span className="choose-text">Holland Maggie</span>
                    </div>
                    <div className="choose-option">
                        <img className="choose-avatar-icon" src={avatar2} alt="Avatar" />
                        <span className="choose-text">Holland Maggie</span>
                    </div>
                    <div className="choose-option">
                        <img className="choose-plus-icon" src={plusIcon} alt="Add profile" />
                        <span className="choose-text">Add profile</span>
                    </div>
                </div>
                <div className="manage-container">
                    Manage Profiles
                </div>
            </div>
        </div>
    )
}

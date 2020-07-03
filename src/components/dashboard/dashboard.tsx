import React, { useState, useEffect } from 'react';
import { Header } from '../../components/header/header';
import { Carousel } from '../../components/carousel/carousel';

import './dashboard.scss';
import logo from '@images/breaking-bad-logo.png';
import playIcon from '@images/play-button.png';
import informationIcon from '@images/information-icon.png';
import soundIcon from '@images/sound.png';
import { getPopularOnNetflix } from '../../shared/services/api/recommendations';
import { Recommendation } from 'shared/interfaces/recommendation.interfaces';

export const Dashboard = () => {
    const [muteVideo, setVideoMuted] = useState(true);
    const [popular, setPopular] = useState([] as Recommendation[]);

    useEffect(() => {
        const getPopular = async () => {
            setPopular(await getPopularOnNetflix());
        };

        getPopular();
    }, []);

    return (
        <div className="dashboard-page">
            <Header></Header>
            <div className="container">
                <div className="spotlight-video">
                    <video preload="true" loop muted={muteVideo} autoPlay height="100%" width="100%">
                        <source src="http://localhost:9081/media/umbrella_academy.mp4"
                            type="video/mp4" />
                    </video>
                </div>
                <div className="menu">
                    <div className="left-menu">
                        <img className="spotlight-logo" src={logo} alt="Umbrella Academy" />
                        <span className="logline">A broken family, (almost)all gifted with supernatural abilities comes together to mourn the passing of their father.</span>
                        <div className="buttons">
                            <div className="play-btn">
                                <img className="play-icon" src={playIcon} alt="Play" />
                                <span className="play-text">Watch</span>
                            </div>
                            <div className="information-btn">
                                <img className="info-icon" src={informationIcon} alt="Information" />
                                <span className="info-text">More information</span>
                            </div>
                        </div>
                    </div>
                    <div className="right-menu" onClick={() => setVideoMuted(!muteVideo)}>
                        <img className="sound-icon" src={soundIcon} alt="Information" />
                    </div>
                </div>
                <div className="recommendations">
                    <span className="title">Popular on Netflix</span>
                    <Carousel data={popular}></Carousel>
                </div>
                <div className="recommendations">
                    <span className="title">Popular on Netflix</span>
                    <Carousel data={popular}></Carousel>
                </div>
                <div className="recommendations">
                    <span className="title">Popular on Netflix</span>
                    <Carousel data={popular}></Carousel>
                </div>
            </div>
        </div>
    )
}

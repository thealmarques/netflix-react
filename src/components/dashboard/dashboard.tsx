import React, { useState, useEffect } from 'react';
import { Header } from '../../components/header/header';
import { Carousel } from '../../components/carousel/carousel';

import './dashboard.scss';
import logo from '@images/breaking-bad-logo.png';
import playIcon from '@images/play-button.png';
import informationIcon from '@images/information-icon.png';
import soundIcon from '@images/sound.png';
import { getRecommendedItems } from '../../shared/services/api/recommendations';
import { Recommendation } from 'shared/interfaces/recommendation.interfaces';

export const Dashboard = () => {
    const [muteVideo, setVideoMuted] = useState(true);
    const [popular, setPopular] = useState([] as Recommendation[]);
    const [trending, setTrending] = useState([] as Recommendation[]);
    const [releases, setReleases] = useState([] as Recommendation[]);


    useEffect(() => {
        const getPopular = async () => {
            setPopular(await getRecommendedItems());
            setTrending(await getRecommendedItems());
            setReleases(await getRecommendedItems());
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
                {
                    popular.length > 0 && (
                        <div className="recommendations">
                            <span className="title">Popular on Netflix</span>
                            <Carousel id="popular" data={popular.reverse()}></Carousel>
                        </div>
                    )
                }
                {
                    trending.length > 0 && (
                        <div className="recommendations">
                            <span className="title">Trending Now</span>
                            <Carousel id="trending" data={trending}></Carousel>
                        </div>
                    )
                }
                {
                    releases.length > 0 && (
                        <div className="recommendations">
                            <span className="title">New Releases</span>
                            <Carousel id="releases" data={releases.reverse()}></Carousel>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

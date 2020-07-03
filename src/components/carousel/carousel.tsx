import React, { useState } from 'react'
import { Recommendation } from 'shared/interfaces/recommendation.interfaces';
import leftIcon from '@images/left-white.png';
import './carousel.scss';
import playIcon from '@images/play-button.png';

export const Carousel = (props: any) => {
    const data = props.data as Recommendation[];
    const [back, setBack] = useState(false);

    if (data.length > 0) {
        duplicateEntries(data);
        return (
            <div className="carousel">
                <div hidden={!back} className="back-container">
                    <img className="arrow-icon" src={leftIcon} alt="Back" />
                </div>
                <div onClick={() => {
                    const scroll = document.getElementsByClassName('slider')[0] as HTMLDivElement;
                    scroll.scroll(100, 0);
                }} className="next-container">
                    <img className="arrow-icon rotate180" src={leftIcon} alt="Next" />
                </div>
                <div className="slider">
                    {renderData(data[0], 0)}
                    {renderData(data[0], 1)}
                    {renderData(data[0], 2)}
                    {renderData(data[0], 3)}
                    {renderData(data[0], 4)}
                    {renderData(data[0], 5)}
                    {renderData(data[0], 6)}
                    {renderData(data[0], 7)}
                    {renderData(data[0], 8)}
                    {renderData(data[0], 9)}
                </div>
            </div>
        )
    }
    return null;
}

const renderData = (data: Recommendation, index: number) => {
    const mediaProvider = "http://localhost:9081/media/";
    return (
        <div
            onMouseEnter={() => restartAnimation(index)}
            onMouseMove={() => restartAnimation(index)}
            className="data-container">
            <img className="item-poster"
                src={data.poster}
                alt={data.name} />
            <div className="item-video">
                <video className="video-small" preload="true" width="100%" height="100%" loop muted autoPlay>
                    <source src={`${mediaProvider}${data.video}`}
                        type="video/mp4" />
                </video>
                <div className="video-container">
                    <div className="play-container">
                        <img className="icon" src={playIcon} alt="Play" />
                    </div>
                    {data.name}
                </div>
            </div>
        </div>
    )
}

// Just for test purposes. I want several examples
const duplicateEntries = (data: Recommendation[]) => {
    for (let i = 0; i < 10; i++) {
        data.push(data[0]);
        data.push(data[1])
        data.push(data[2])
    }
}

const restartAnimation = (index: number) => {
    const element = document.getElementsByClassName('video-container')[index] as HTMLElement;
    element.style.animation = "none";

    setTimeout(() => {
        element.style.animation = "";
    }, 10);
}
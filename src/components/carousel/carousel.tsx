import React from 'react'
import { Recommendation } from 'shared/interfaces/recommendation.interfaces';
import leftIcon from '@images/left-white.png';
import './carousel.scss';

export const Carousel = (props: any) => {
    const data = props.data;
    if (data) {
        duplicateEntries(data);
    }
    return (
        <div className="carousel">
            <div className="back-container">
                <img className="arrow-icon" src={leftIcon} alt="Back" />
            </div>
            <div className="next-container">
                <img className="arrow-icon rotate180" src={leftIcon} alt="Next" />
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

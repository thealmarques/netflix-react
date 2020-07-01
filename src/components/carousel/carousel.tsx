import React, { useState } from 'react'
import { Recommendation } from 'shared/interfaces/recommendation.interfaces';
import leftIcon from '@images/left-white.png';
import './carousel.scss';

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
                <div className="next-container">
                    <img className="arrow-icon rotate180" src={leftIcon} alt="Next" />
                </div>
                {renderData(data[0])}
            </div>
        )
    }
    return null;
}

const renderData = (data: Recommendation) => {
    return (
        <div className="data-container">
            <img className="item-poster"
                src={data.poster}
                alt={data.name} />
            <div className="item-video">

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

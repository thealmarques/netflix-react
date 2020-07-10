import React, { useState, useEffect } from 'react'
import { Recommendation } from 'shared/interfaces/recommendation.interfaces';
import leftIcon from '@images/left-white.png';
import './carousel.scss';
import playIcon from '@images/play-button.png';

const batchSize = 6;

export const Carousel = (props: any) => {
    const data = props.data as Recommendation[];
    const type = props.id as string;
    const totalPages = data.length / batchSize;

    const [cards, setCards] = useState([] as Recommendation[]);
    const [nextPage, setNextPage] = useState(1);
    const [previousPage, setPreviousPage] = useState(0);
    const [isBackActive, setBackActive] = useState(false);

    useEffect(() => {
        setCards(data.slice(0, batchSize * 2));
    }, [data]);

    useEffect(() => {
        if (cards.length > 12) {
            const slider = 
                document.querySelector(`.carousel.${type} .slider-content`) as HTMLDivElement;
            slider.style.transition = "transform .7s ease-in-out";
            slider.style.transform = `translate3d(-85%, 0px, 0px)`;
            setBackActive(true);
        }
    }, [cards, type]);

    if (data.length > 0) {
        return (
            <div className={`carousel ${type}`}>
                <div hidden={!isBackActive} className="back-container" onClick={() => {
                    if (previousPage - 1 < 0) {
                        const slider = document.querySelector(`.carousel.${type} .slider-content`) as HTMLDivElement;
                        slider.style.transition = "";
                        slider.style.transform = `translate3d(-187%, 0px, 0px)`;

                        setCards(data.slice(data.length - batchSize, data.length).concat(cards.slice(0, 2 * batchSize)));

                        setPreviousPage(totalPages - 1);
                        setNextPage(1);
                    } else {
                        if (Math.floor(cards.length / batchSize) === 3) {
                            const slider = document.querySelector(`.carousel.${type} .slider-content`) as HTMLDivElement;
                            slider.style.transition = "";
                            slider.style.transform = `translate3d(-185%, 0px, 0px)`;

                            setCards(data.slice((previousPage - 1) * batchSize, (previousPage - 1) * batchSize + batchSize).concat(
                                cards.slice(0, cards.length - batchSize)
                            ));
                        }

                        setPreviousPage(previousPage - 1);
                        if (nextPage - 1 < 0) {
                            setNextPage(totalPages - 1);
                        } else {
                            setNextPage(nextPage - 1);
                        }
                    }
                }}>
                    <img className="arrow-icon" src={leftIcon} alt="Back" />
                </div>
                <div onClick={() => {
                    if (nextPage + 1 === totalPages) {
                        const slider = document.querySelector(`.carousel.${type} .slider-content`) as HTMLDivElement;
                        slider.style.transition = "";
                        slider.style.transform = `translate3d(-3%, 0px, 0px)`;

                        setCards(cards.slice(batchSize - 1, cards.length).concat(data.slice(0, batchSize)));

                        setNextPage(0);
                        setPreviousPage(totalPages - 1);
                    } else {
                        if (Math.floor(cards.length / batchSize) === 3) {
                            const slider = document.querySelector(`.carousel.${type} .slider-content`) as HTMLDivElement;
                            slider.style.transition = "";
                            slider.style.transform = `translate3d(-3%, 0px, 0px)`;

                            setCards(cards.slice((cards.length - 2 * batchSize) - 1, cards.length)
                                .concat(data.slice((nextPage + 1) * batchSize, (nextPage + 1) * batchSize + batchSize - 1)));
                        } else {
                            setCards(cards.concat(data.slice((nextPage + 1) * batchSize, (nextPage + 1) * batchSize + batchSize)));
                        }

                        setNextPage(nextPage + 1);
                        setPreviousPage(nextPage - 1);
                    }
                }} className="next-container">
                    <img className="arrow-icon rotate180" src={leftIcon} alt="Next" />
                </div>
                <div className="pagination">
                    {
                        renderPageItems(data.length / batchSize, nextPage)
                    }
                </div>
                <div className="slider">
                    <div className="slider-content">
                        {
                            cards.map((value, index) => {
                                return renderData(value, index, type);
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    return null;
}

const renderPageItems = (length: number, nextPage: number) => {
    return Array(length).fill(0).map((_,index) => {
        let currentPage = nextPage - 1 < 0 ? 3 : nextPage - 1;
        return (
            <div key={index} 
                className={`pagination-item ${currentPage === index ? 'active' : 'disabled'}`}>
            </div>
        );
    })
}

const renderData = (data: Recommendation, index: number, type: string) => {
    const mediaProvider = "http://localhost:9081/media/";
    return (
        <div
            key={index}
            onMouseEnter={() => restartAnimation(index, type)}
            onMouseMove={() => restartAnimation(index, type)}
            id={`data-container-${index}`}
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

const restartAnimation = (index: number, type: string) => {
    const element = document.querySelectorAll(`.carousel.${type} .video-container`)[index] as HTMLElement;
    element.style.animation = "none";

    setTimeout(() => {
        element.style.animation = "";
    }, 10);
}
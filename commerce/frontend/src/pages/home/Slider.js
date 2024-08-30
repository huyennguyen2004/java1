import React, { useState, useEffect } from 'react';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            image: 'link-to-slide-image1.jpg',
            caption: 'Amazing Deals on Apparel!',
        },
        {
            image: 'link-to-slide-image2.jpg',
            caption: 'Latest Electronics at Unbeatable Prices!',
        },
        {
            image: 'link-to-slide-image3.jpg',
            caption: 'Exclusive Discounts Just for You!',
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Chuyển slide sau 5 giây
        return () => clearInterval(interval); // Dọn dẹp interval khi component bị hủy
    }, []);

    return (
        <section className="section-main padding-y">
            <div className="slider-container">
                <button className="slider-button" onClick={prevSlide}>❮</button>
                <div className="slider-content">
                    <img
                        src={slides[currentIndex].image}
                        alt={slides[currentIndex].caption}
                        className="slider-image"
                    />
                    <div className="caption">{slides[currentIndex].caption}</div>
                </div>
                <button className="slider-button" onClick={nextSlide}>❯</button>
            </div>
            <style jsx>{`
                .slider-container {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }
                .slider-button {
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                    color: #fff;
                    padding: 10px;
                    transition: opacity 0.3s;
                }
                .slider-button:hover {
                    opacity: 0.7;
                }
                .slider-content {
                    text-align: center;
                    transition: opacity 0.5s;
                }
                .slider-image {
                    max-width: 100%;
                    height: auto;
                }
                .caption {
                    margin-top: 10px;
                    font-size: 18px;
                    color: #fff;
                }
            `}</style>
        </section>
    );
};

export default Slider;

import React from 'react';

const Deal = () => (
    <section className="padding-bottom">
        <h2>Special Deals</h2>
        <div className="deal-items">
            <div className="deal-item">
                <img src="link-to-deal-image1.jpg" alt="Deal 1" />
                <h3>50% Off on T-Shirts</h3>
                <p>Grab your favorite t-shirts at half price! Limited time offer.</p>
                <span className="deal-price">Was: $39.99</span>
                <span className="deal-discounted-price">$19.99</span>
            </div>
            <div className="deal-item">
                <img src="link-to-deal-image2.jpg" alt="Deal 2" />
                <h3>Buy 1 Get 1 Free on Jeans</h3>
                <p>Buy any pair of jeans and get another pair for free!</p>
                <span className="deal-price">Starting from: $49.99</span>
            </div>
            <div className="deal-item">
                <img src="link-to-deal-image3.jpg" alt="Deal 3" />
                <h3>30% Off on Sweaters</h3>
                <p>Stay warm with our cozy sweaters at 30% off!</p>
                <span className="deal-price">Was: $29.99</span>
                <span className="deal-discounted-price">$20.99</span>
            </div>
            {/* Thêm nhiều ưu đãi khác nếu cần */}
        </div>
    </section>
);

export default Deal;

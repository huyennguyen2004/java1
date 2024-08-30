import React from 'react';

const Apparel = () => (
    <section className="padding-bottom">
        <h2>Our Apparel Collection</h2>
        <div className="apparel-items">
            <div className="apparel-item">
                <img src="link-to-image1.jpg" alt="Product 1" />
                <h3>T-Shirt</h3>
                <p>Comfortable and stylish t-shirt available in various colors.</p>
                <span>$19.99</span>
            </div>
            <div className="apparel-item">
                <img src="link-to-image2.jpg" alt="Product 2" />
                <h3>Jeans</h3>
                <p>Classic fit jeans made from high-quality denim.</p>
                <span>$39.99</span>
            </div>
            <div className="apparel-item">
                <img src="link-to-image3.jpg" alt="Product 3" />
                <h3>Sweater</h3>
                <p>Warm and cozy sweater perfect for winter.</p>
                <span>$29.99</span>
            </div>
            {/* Thêm nhiều sản phẩm nếu cần */}
        </div>
    </section>
);

export default Apparel;

import React from 'react';

const Electronics = () => (
    <section className="padding-bottom">
        <h2>Electronics Collection</h2>
        <div className="electronics-items">
            <div className="electronics-item">
                <img src="link-to-electronics-image1.jpg" alt="Smartphone" />
                <h3>Smartphone XYZ</h3>
                <p>Latest smartphone with amazing features.</p>
                <span className="electronics-price">$699.99</span>
            </div>
            <div className="electronics-item">
                <img src="link-to-electronics-image2.jpg" alt="Laptop" />
                <h3>Laptop ABC</h3>
                <p>High-performance laptop for all your needs.</p>
                <span className="electronics-price">$999.99</span>
            </div>
            <div className="electronics-item">
                <img src="link-to-electronics-image3.jpg" alt="Headphones" />
                <h3>Wireless Headphones</h3>
                <p>Experience high-quality sound with these headphones.</p>
                <span className="electronics-price">$149.99</span>
            </div>
            {/* Thêm nhiều sản phẩm khác nếu cần */}
        </div>
    </section>
);

export default Electronics;

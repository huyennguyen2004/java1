import React, { useState } from 'react';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('Thank you for subscribing!');
        setEmail('');
    };

    return (
        <section className="padding-bottom">
            <h2>Subscribe to Our Newsletter</h2>
            <form onSubmit={handleSubmit} className="subscribe-form">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
            {message && <p className="subscribe-message">{message}</p>}
        </section>
    );
};

export default Subscribe;

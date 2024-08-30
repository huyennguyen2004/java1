import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="section-footer bg-secondary">
                <div className="container">
                    <section className="footer-top padding-y">
                        <div className="row">
                            <aside className="col-md">
                                <h6 className="title">Brands</h6>
                                <ul className="list-unstyled">
                                    <li><Link to="#">Adidas</Link></li>
                                    <li><Link to="#">Puma</Link></li>
                                    <li><Link to="#">Reebok</Link></li>
                                    <li><Link to="#">Nike</Link></li>
                                </ul>
                            </aside>
                            <aside className="col-md">
                                <h6 className="title">Company</h6>
                                <ul className="list-unstyled">
                                    <li><Link to="#">About us</Link></li>
                                    <li><Link to="#">Career</Link></li>
                                    <li><Link to="#">Find a store</Link></li>
                                    <li><Link to="#">Rules and terms</Link></li>
                                    <li><Link to="#">Sitemap</Link></li>
                                </ul>
                            </aside>
                            <aside className="col-md">
                                <h6 className="title">Help</h6>
                                <ul className="list-unstyled">
                                    <li><Link to="#">Contact us</Link></li>
                                    <li><Link to="#">Money refund</Link></li>
                                    <li><Link to="#">Order status</Link></li>
                                    <li><Link to="#">Shipping info</Link></li>
                                    <li><Link to="#">Open dispute</Link></li>
                                </ul>
                            </aside>
                            <aside className="col-md">
                                <h6 className="title">Account</h6>
                                <ul className="list-unstyled">
                                    <li><Link to="#">User Login</Link></li>
                                    <li><Link to="#">User register</Link></li>
                                    <li><Link to="#">Account Setting</Link></li>
                                    <li><Link to="#">My Orders</Link></li>
                                </ul>
                            </aside>
                            <aside className="col-md">
                                <h6 className="title">Social</h6>
                                <ul className="list-unstyled">
                                    <li><Link to="#"><i className="fab fa-facebook"></i> Facebook</Link></li>
                                    <li><Link to="#"><i className="fab fa-twitter"></i> Twitter</Link></li>
                                    <li><Link to="#"><i className="fab fa-instagram"></i> Instagram</Link></li>
                                    <li><Link to="#"><i className="fab fa-youtube"></i> Youtube</Link></li>
                                </ul>
                            </aside>
                        </div> {/* row.// */}
                    </section> {/* footer-top.// */}

                    <section className="footer-bottom border-top row">
                        <div className="col-md-2">
                            <p className="text-muted"> &copy; 2019 Company name </p>
                        </div>
                        <div className="col-md-8 text-md-center">
                            <span className="px-2">info@pixsellz.io</span>
                            <span className="px-2">+879-332-9375</span>
                            <span className="px-2">Street name 123, Avanue abc</span>
                        </div>
                        <div className="col-md-2 text-md-right text-muted">
                            <i className="fab fa-lg fa-cc-visa"></i>
                            <i className="fab fa-lg fa-cc-paypal"></i>
                            <i className="fab fa-lg fa-cc-mastercard"></i>
                        </div>
                    </section>
                </div> {/* container.// */}
            </footer>
        );
    }
}

export default Footer;

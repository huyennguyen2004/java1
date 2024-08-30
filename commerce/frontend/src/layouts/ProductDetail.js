import React from "react";

function ProductDetail() {
    return (
        <div className="container">
            <section className="header-main border-bottom">
                <div className="row align-items-center">
                    <div className="col-xl-2 col-lg-3 col-md-12">
                        <a href="/" className="brand-wrap">
                            <img className="logo" src="images/logo.png" alt="Brand Logo" />
                        </a>
                    </div>
                    <div className="col-xl-6 col-lg-5 col-md-6">
                        <form action="#" className="search-header">
                            <div className="input-group w-100">
                                <select className="custom-select border-right" name="category_name">
                                    <option value="">All type</option>
                                    <option value="codex">Special</option>
                                    <option value="comments">Only best</option>
                                    <option value="content">Latest</option>
                                </select>
                                <input type="text" className="form-control" placeholder="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit">
                                        <i className="fa fa-search"></i> Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="widgets-wrap float-md-right">
                            <div className="widget-header mr-3">
                                <a href="#" className="widget-view">
                                    <div className="icon-area">
                                        <i className="fa fa-user"></i>
                                        <span className="notify">3</span>
                                    </div>
                                    <small className="text"> My profile </small>
                                </a>
                            </div>
                            <div className="widget-header mr-3">
                                <a href="#" className="widget-view">
                                    <div className="icon-area">
                                        <i className="fa fa-comment-dots"></i>
                                        <span className="notify">1</span>
                                    </div>
                                    <small className="text"> Message </small>
                                </a>
                            </div>
                            <div className="widget-header">
                                <a href="#" className="widget-view">
                                    <div className="icon-area">
                                        <i className="fa fa-shopping-cart"></i>
                                    </div>
                                    <small className="text"> Cart </small>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-content bg-white padding-y">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-6">
                            <div className="card">
                                <article className="gallery-wrap">
                                    <div className="img-big-wrap">
                                        <div><a href="#"><img src="images/items/15.jpg" alt="Product Image" /></a></div>
                                    </div>
                                    <div className="thumbs-wrap">
                                        <a href="#" className="item-thumb"> <img src="images/items/15.jpg" alt="Thumb 1" /></a>
                                        <a href="#" className="item-thumb"> <img src="images/items/15-1.jpg" alt="Thumb 2" /></a>
                                        <a href="#" className="item-thumb"> <img src="images/items/15-2.jpg" alt="Thumb 3" /></a>
                                        <a href="#" className="item-thumb"> <img src="images/items/15-1.jpg" alt="Thumb 4" /></a>
                                    </div>
                                </article>
                            </div>
                        </aside>
                        <main className="col-md-6">
                            <article className="product-info-aside">
                                <h2 className="title mt-3">Hot sale unisex New Design Shoe</h2>
                                <div className="rating-wrap my-3">
                                    <ul className="rating-stars">
                                        <li style={{ width: "80%" }} className="stars-active">
                                            <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i> 
                                        </li>
                                        <li>
                                            <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i> 
                                            <i className="fa fa-star"></i> 
                                        </li>
                                    </ul>
                                    <small className="label-rating text-muted">132 reviews</small>
                                    <small className="label-rating text-success"> <i className="fa fa-clipboard-check"></i> 154 orders </small>
                                </div>

                                <div className="mb-3">
                                    <var className="price h4">USD 465,00</var>
                                    <span className="text-muted">USD 562.65 incl. VAT</span>
                                </div>

                                <p>Compact sport shoe for running, consectetur adipisicing elit...</p>
                                {/* Continue adding the rest of the content */}
                            </article>
                        </main>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductDetail;

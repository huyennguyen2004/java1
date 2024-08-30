import React, { useEffect, useState } from "react";
import { GET_ALL } from "../api/apiService";
import { Link } from "react-router-dom";
import us from "../assets/images/icons/flags/US.png";
import logo from "../assets/images/logo.svg";

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const params = {
      pageNumber: 0,
      pageSize: 5,
      sortBy: 'categoryId',
      sortOrder: 'asc',
    };

    GET_ALL('categories', params)
      .then(response => {
        setCategories(response.content);
      })
      .catch(error => {
        console.error('Failed to fetch categories:', error);
      });
  }, []);

  return (
    <header className="section-header">
      <nav className="navbar navbar-expand-md navbar-light border-bottom">
        <div className="container">
          <Link to="/Home" className="navbar-brand">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Login">Đăng nhập</Link>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/Deals">Khuyến mãi</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Help">Trợ giúp</Link></li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <img src={us} alt="us" height="16" /> Giao hàng tới
                </a>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Danh sách theo dõi
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/ProductDetail/1">Sản phẩm thứ nhất</Link></li>
                  <li><Link className="dropdown-item" to="/ProductDetail/2">Sản phẩm thứ hai</Link></li>
                  <li><Link className="dropdown-item" to="/ProductDetail/3">Sản phẩm thứ ba</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fa fa-bell"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./Cart">
                  <i className="fa fa-shopping-cart"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <section className="header-main border-bottom">
          <div className="row align-items-center">
            <div className="col-md-8">
              <form className="search-header">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Tìm kiếm" />
                  <select
                    className="custom-select border-left"
                    name="category_name">
                    <option value="">Tất cả loại</option>
                    <option value="codex">Đặc biệt</option>
                    <option value="comments">Chỉ tốt nhất</option>
                    <option value="content">Mới nhất</option>
                  </select>
                  <button className="btn btn-primary" type="submit">Tìm kiếm</button>
                </div>
              </form>
            </div>
            <div className="col-md-4 text-end">
              <button className="btn btn-light" type="button">Nâng cao</button>
            </div>
          </div>
        </section>
        <nav className="navbar navbar-expand pl-0 ">
          <ul className="navbar-nav flex-wrap">
            <li className="nav-item"><Link className="nav-link" to="/Home">Trang chủ</Link></li>
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Danh sách sản phẩm
              </div>
              <ul className="dropdown-menu">
                {categories.map((row) => (
                  <li key={row.categoryId}>
                    <Link className="dropdown-item" to={`/ListingGrid?categoryId=${row.categoryId}`}>
                      {row.categoryName}
                    </Link>
                  </li>
                ))}
                <li><Link className="dropdown-item" to="/ListingGrid">Tất cả sản phẩm</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/Electronics">Điện tử</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Apparel">Thời trang</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Beauty">Làm đẹp</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Sports">Thể thao</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Deals">Khuyến mãi</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

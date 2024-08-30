import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import UserLogin from "./UserLogin";
import ListingGrid from "./ListingGrid";
import ProductDetail from './ProductDetail';

const Main = () => (
    <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Detail" element={<ProductDetail />} />
            <Route path="/Login" element={<UserLogin />} />
            <Route path="/ListingGrid" element={<ListingGrid />} />
        </Routes>
    </main>
);

export default Main;

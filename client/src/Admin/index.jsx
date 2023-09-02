import React from 'react'
import Home from './pages/Home'
import Category from './pages/Category'
import Products from './pages/Products'
import Brands from './pages/Brands'
import SideBar from './components/SideBar'
import { Route, Routes } from "react-router-dom";

export default function Admin() {
  return (
    <div className="row m-0 p-0">
    <div className="col-md-3 m-0 p-0 bg-info" style={{ height: '100vh' }}>
        <SideBar />
    </div>
    <div className="col-md-9">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/product" element={<Products />} />
            <Route path="/brand" element={<Brands />} />
            <Route path="*" element={<Home />} />
        </Routes>
    </div>
</div>
  )
}

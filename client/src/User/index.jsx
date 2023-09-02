import React, { useState } from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import NavigationBar from './Components/NavigationBar'
import FooterSection from './Components/FooterSection'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'
import Brands from './pages/Brands'
import Categories from './pages/Categories'
import ProductByBrands from './pages/ProductByBrands'
// import ProductByCategory from './pages/ProductByCategory'
import Cart from './pages/CustomCard/Cart'
import CheckOut from './pages/CheckOut'

function User() {

  return (
    <>
    <NavigationBar />

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/brands/:BrandName" element={<ProductByBrands />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details" element={<CheckOut/>} />
        <Route path="/categories/:CategoryName" element={<CategoryPage />} />
        <Route path="/products/:_id" element={<ProductPage />} />
        {/* <Route path="/products/category/:categoryName" element={<CategoryPage />} /> */}
        <Route path="*" element={<Navigate to='/' replace={true} />} />
</Routes>     


<FooterSection/>    
    </>
  )
}

export default User
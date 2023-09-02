import React from 'react'
import GuestNav from './Components/GuestNav'
import {Navigate,Route, Routes,} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login'
import SignUp from './pages/SignUp';

export default function Guest() {
    return (
        <>
            <GuestNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<Navigate to='/login' replace={true} />} />
            </Routes>
        </>
    )
}
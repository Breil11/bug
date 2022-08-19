import React from 'react'
import { Route, Routes } from "react-router-dom";

import ErrorPage from 'containers/ErrorPage/ErrorPage';
import HomePage from 'containers/HomePage/HomePage';

import LoginPage from 'containers/LoginPage/LoginPage';

import HomeInterventionBox from 'components/HomeInterventionBox/HomeInterventionBox';
import BasicButton from 'components/BasicButton/BasicButton';

const RouteMap = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<BasicButton />} />
            <Route path="/interventions" element={<HomeInterventionBox />} />
            {/* <Route path="login" element={<BasicButton />} /> */}
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default RouteMap
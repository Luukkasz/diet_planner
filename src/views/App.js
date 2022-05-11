// import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import './App.scss';
import Navigation from "../components/Navigation/Navigation";
import MainPage from "./MainPage";
import AddProduct from "./AddProduct";
import MyPlans from "./MyPlans";

function App() {


    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="addProduct" element={<AddProduct/>}/>
                <Route path="myPlans" element={<MyPlans/>}/>
            </Routes>
        </>
    );
}

export default App;

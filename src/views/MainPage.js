import React from 'react';
import './MainPage.scss';
import ProductList from "../components/ProductList/ProductList";
import AddSinglePlan from "../components/AddSinglePlan/AddSinglePlan";

function MainPage(props) {
    return (
        <div className="mainPage__container">
            <ProductList />
            <AddSinglePlan />
        </div>
    );
}

export default MainPage;
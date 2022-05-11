import React from 'react';
import './MainPage.scss';
import AddSinglePlan from "../components/AddSinglePlan/AddSinglePlan";
import ProductList from "../components/ProductList/ProductList";

function MainPage({productList}) {
    return (
        <div className="mainPage__container">
            <ProductList productList={productList}/>
            <AddSinglePlan />
        </div>
    );
}

export default MainPage;
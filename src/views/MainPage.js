import React from 'react';
import './MainPage.scss';
import AddSinglePlan from "../components/AddSinglePlan/AddSinglePlan";
import ProductList from "../components/ProductList/ProductList";

function MainPage({productList, singlePlan, setSinglePlan, setPlanList}) {
    return (
        <div className="mainPage__container">
            <ProductList
                productList={productList}
                setSinglePlan={setSinglePlan}
            />
            <AddSinglePlan
                singlePlan={singlePlan}
                setSinglePlan={setSinglePlan}
                setPlanList={setPlanList}
            />
        </div>
    );
}

export default MainPage;
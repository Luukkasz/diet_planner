import React from 'react';
import './MainPage.scss';
import AddSinglePlan from "../components/AddSinglePlan/AddSinglePlan";
import ProductList from "../components/ProductList/ProductList";

function MainPage({productList, setProductList, singlePlan, setSinglePlan, setPlanList}) {
    return (
        <div className="mainPage__container">
            <ProductList
                productList={productList}
                setSinglePlan={setSinglePlan}
                setProductList={setProductList}
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
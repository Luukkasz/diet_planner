import React from 'react';
import './MainPage.scss';
import AddSinglePlan from "../components/AddSinglePlan/AddSinglePlan";
import ProductList from "../components/ProductList/ProductList";

function MainPage({productList, setProductList, singlePlan, setSinglePlan, setPlanList}) {
    return (
        <div className="mainPage__container">
            <AddSinglePlan
                singlePlan={singlePlan}
                setSinglePlan={setSinglePlan}
                setPlanList={setPlanList}
            />
            <ProductList
                productList={productList}
                setSinglePlan={setSinglePlan}
                setProductList={setProductList}
            />
        </div>
    );
}

export default MainPage;
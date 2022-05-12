import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import './App.scss';
import Navigation from "../components/Navigation/Navigation";
import MainPage from "./MainPage";
import AddProduct from "./AddProduct";
import MyPlans from "./MyPlans";

function App() {
    const initialNewProduct = {
        name: '',
        proteins: '',
        carbs: '',
        fats: '',
        weight: '',
    };
    const [newProduct, setNewProduct] = useState(initialNewProduct);
    const [productList, setProductList] = useState([]);
    const [singlePlan, setSinglePlan] = useState([]);
    const [planList, setPlanList] = useState([]);


    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<MainPage
                    productList={productList}
                    setProductList={setProductList}
                    singlePlan={singlePlan}
                    setSinglePlan={setSinglePlan}
                    setPlanList={setPlanList}
                />}/>
                <Route path="addProduct" element={<AddProduct
                    newProduct={newProduct}
                    setNewProduct={setNewProduct}
                    productList={productList}
                    setProductList={setProductList}
                    initialNewProduct={initialNewProduct}
                    setSinglePlan={setSinglePlan}
                />}/>
                <Route path="myPlans" element={<MyPlans
                    planList={planList}
                    setPlanList={setPlanList}

                />}/>
            </Routes>
        </>
    );
}

export default App;

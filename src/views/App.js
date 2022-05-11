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
    };
    const [newProduct, setNewProduct] = useState(initialNewProduct);
    const [productList, setProductList] = useState([]);


    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<MainPage productList={productList}/>}/>
                <Route path="addProduct" element={<AddProduct
                    newProduct={newProduct}
                    setNewProduct={setNewProduct}
                    productList={productList}
                    setProductList={setProductList}
                    initialNewProduct={initialNewProduct}
                />}/>
                <Route path="myPlans" element={<MyPlans/>}/>
            </Routes>
        </>
    );
}

export default App;

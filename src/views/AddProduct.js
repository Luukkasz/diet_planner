import React from 'react';
import './AddProduct.scss';
import NewProductForm from "../components/NewProductForm/NewProductForm";
import ProductList from "../components/ProductList/ProductList";

function AddProduct(props) {
    return (
        <div className="addProduct__container">
            <NewProductForm />
            <ProductList />
        </div>

    );
}

export default AddProduct;
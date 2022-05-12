import React from 'react';
import './AddProduct.scss';
import NewProductForm from "../components/NewProductForm/NewProductForm";
import ProductList from "../components/ProductList/ProductList";

function AddProduct({newProduct, setNewProduct, productList, setProductList, initialNewProduct, setSinglePlan}) {
    return (
        <div className="addProduct__container">
            <NewProductForm newProduct={newProduct}
                            setNewProduct={setNewProduct}
                            productList={productList}
                            setProductList={setProductList}
                            initialNewProduct={initialNewProduct}  />




            <ProductList
                productList={productList}
                setProductList={setProductList}
                setSinglePlan={setSinglePlan}
            />
        </div>

    );
}

export default AddProduct;
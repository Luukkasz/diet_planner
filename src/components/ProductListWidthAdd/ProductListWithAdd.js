import React from 'react';
import SingleProduct from "../SingleProduct/SingleProduct";

function ProductListWithAdd({productList}) {
    return (
        <div className="productList__wrapper">
            <h2 className="productList__title">Product List</h2>
            <div className="productList__input-wrapper">
                <label htmlFor="search">
                    Search product:
                </label>
                <input
                    type="text"
                    name="search"
                    id="search"
                />
            </div>

            <ul className="productList__list">
                {productList.map((product, idx) => {
                    return (
                        <SingleProduct key={idx} product={product} idx={idx}/>
                    )
                })}
            </ul>
        </div>
    );
}

export default ProductListWithAdd;
import React, {useEffect, useState} from 'react';
import './ProductList.scss';
import SingleProduct from "../SingleProduct/SingleProduct";


function ProductList({productList, setSinglePlan, setProductList, hide}) {
    const [filteredProductList, setFilteredProductList] = useState(productList);
    const [searchProductInput, setSearchProductInput] = useState('')

    useEffect(() => setFilteredProductList(productList), [productList]);

    const handleInputChange = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = productList.filter((product) => {
                return product.name.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setFilteredProductList(results);
        } else {
            setFilteredProductList(productList);
        }
        setSearchProductInput(keyword);
    }

    return (
        <div className="productList__wrapper">
            <h2 className="productList__title">Product List</h2>
            <div className="productList__input-wrapper">
                <label htmlFor="searchProduct">
                    Search product:
                </label>
                <input
                    type="text"
                    name="searchProduct"
                    id="searchProduct"
                    value={searchProductInput}
                    onChange={handleInputChange}
                />
            </div>

            <ul className="productList__list">
                {filteredProductList.map((product, idx) => {
                    return (
                        <SingleProduct
                            key={idx}
                            idx={idx}
                            product={product}
                            setSinglePlan={setSinglePlan}
                            productList={productList}
                            setProductList={setProductList}
                            hide={hide}
                        />
                    )
                })}

            </ul>


        </div>
    );
}

export default ProductList;
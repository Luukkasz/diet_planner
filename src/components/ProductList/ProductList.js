import React, {useState} from 'react';
import './ProductList.scss';
import SingleProduct from "../SingleProduct/SingleProduct";

function ProductList({productList, setSinglePlan, setProductList}) {
    const [filteredProductList, setFilteredProductList] = useState(productList);
    const [searchProductInput, setSearchProductInput] = useState('')

    const handleInputChange = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = productList.filter((product) => {
                return product.name.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setFilteredProductList(results);
        } else {
            setFilteredProductList(productList);
            // If the text field is empty, show all users
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
                {filteredProductList.map((product,idx) => {
                    return (
                        <SingleProduct
                            key={idx}
                            idx={idx}
                            product={product}
                            setSinglePlan={setSinglePlan}
                            productList={productList}
                            setProductList={setProductList}
                            />
                    )
                })}

            </ul>


        </div>
    );
}

export default ProductList;
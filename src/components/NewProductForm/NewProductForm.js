import React, {useState} from "react";
import './NewProductForm.scss';

function NewProductForm(props) {
    const [newProduct, setNewProduct] = useState({
        name: '',
        proteins: '',
        carbs: '',
        fats: '',
    });

    const [productList, setProductList] = useState([]);

    const handleChange = (e) => {
        setNewProduct(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleAddProduct = (e) => {
        e.preventDefault();
        setProductList(prevState => {
            return [
                ...prevState,
                {...newProduct,
                id: Math.random()*1000,
                kcals:(Number(newProduct.proteins) * 4) + (Number(newProduct.carbs) * 4) + (Number(newProduct.fats) * 9) }
            ]
        });

        setNewProduct({
            name: '',
            proteins: '',
            carbs: '',
            fats: '',
        })
    }

    const kcalCounter = (newProduct) => {
        const {proteins, carbs, fats} = newProduct;
        const kcals = (Number(proteins) * 4) + (Number(carbs) * 4) + (Number(fats) * 9);

        if (kcals === 0) return null;

        return kcals
    }

    return (
        <div className="newProduct__wrapper">
            <h2 className="newProduct__title">Add Product</h2>
            <form className="newProduct__form" onSubmit={handleAddProduct}>
                <div className="newProduct__input-wrapper">
                    <label htmlFor="name">Product name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={newProduct.name}
                        onChange={handleChange}
                        required/>

                </div>

                <div className="newProduct__input-wrapper">
                    <label htmlFor="proteins">Proteins in 100g: </label>
                    <input
                        type="number"
                        name="proteins"
                        id="proteins"
                        value={newProduct.proteins}
                        onChange={handleChange}
                        required/>

                </div>

                <div className="newProduct__input-wrapper">
                    <label htmlFor="name">Carbs in 100g: </label>
                    <input
                        type="number"
                        name="carbs"
                        id="carbs"
                        value={newProduct.carbs}
                        onChange={handleChange}
                        required/>

                </div>

                <div className="newProduct__input-wrapper">
                    <label htmlFor="fats">Fats in 100g: </label>
                    <input
                        type="number"
                        name="fats"
                        id="fats"
                        value={newProduct.fats}
                        onChange={handleChange}
                        required/>

                </div>

                <p className="newProduct__kcal">
                    Kcals in 100g: {kcalCounter(newProduct)}
                </p>

                <button>Add to list</button>
            </form>
        </div>
    );
}

export default NewProductForm;
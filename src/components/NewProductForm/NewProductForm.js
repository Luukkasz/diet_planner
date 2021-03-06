import React from "react";
import './NewProductForm.scss';
import Input from '@mui/material/Input';
import Button from "@mui/material/Button";

const ariaLabel = {'aria-label': 'description'};


function NewProductForm({newProduct, setNewProduct, setProductList, initialNewProduct}) {
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
        if (!isNaN(newProduct.name)) return;

        setProductList(prevState => {

            return [
                ...prevState,
                {
                    ...newProduct,
                    id: Math.random() * 1000,
                    kcals: (Number(newProduct.proteins) * 4) + (Number(newProduct.carbs) * 4) + (Number(newProduct.fats) * 9),
                    weight: 100,
                }
            ]
        });

        setNewProduct(initialNewProduct);
    }

    const kcalCounter = (newProduct) => {
        const {proteins, carbs, fats} = newProduct;
        const kcals = (Number(proteins) * 4) + (Number(carbs) * 4) + (Number(fats) * 9);

        if (kcals === 0) return null;
        return kcals;
    }

    return (
        <div className="newProduct__wrapper">
            <h2 className="newProduct__title">Add Product</h2>
            <form className="newProduct__form" onSubmit={handleAddProduct}>
                <div className="newProduct__input-wrapper">
                    <label htmlFor="name">Product name: </label>

                    <Input
                        type="text"
                        name="name"
                        id="name"
                        value={newProduct.name}
                        onChange={handleChange}
                        required
                        inputProps={ariaLabel}
                    />
                </div>

                <div className="newProduct__input-wrapper">
                    <label htmlFor="proteins">Proteins in 100g: </label>

                    <Input
                        type="number"
                        name="proteins"
                        id="proteins"
                        value={newProduct.proteins}
                        onChange={handleChange}
                        required
                        inputProps={ariaLabel}
                    />
                </div>

                <div className="newProduct__input-wrapper">
                    <label htmlFor="name">Carbs in 100g: </label>

                    <Input
                        type="number"
                        name="carbs"
                        id="carbs"
                        value={newProduct.carbs}
                        onChange={handleChange}
                        required
                        inputProps={ariaLabel}
                    />
                </div>

                <div className="newProduct__input-wrapper">
                    <label htmlFor="fats">Fats in 100g: </label>

                    <Input
                        type="number"
                        name="fats"
                        id="fats"
                        value={newProduct.fats}
                        onChange={handleChange}
                        required
                        inputProps={ariaLabel}
                    />
                </div>

                <p className="newProduct__kcal">
                    Kcals in 100g: <strong>{kcalCounter(newProduct)}</strong>
                </p>

                <div className="newProduct__button-wrapper">
                    <Button
                        type="submit"
                        variant="outlined"
                        size="small"
                        sx={{
                            color: 'cornflowerblue',
                            textTransform: 'none',
                        }}>
                        Add to list
                    </Button>
                </div>


            </form>
        </div>
    );
}

export default NewProductForm;
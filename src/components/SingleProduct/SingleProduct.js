import React, {useState} from 'react';
import './SingleProduct.scss';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";

function SingleProduct({product, setSinglePlan, productList, setProductList, hide}) {
    const [meal, setMeal] = useState('breakfast')
    const [weight, setWeight] = useState('');

    const handleMealChange = (e) => setMeal(e.target.value);
    const handleWeightChange = (e) => setWeight(e.target.value);

    const handleRemoveProduct = () => {
        setProductList(productList.filter((item) => {
            return item.id !== product.id;
        }));
    }


    const handleAddMeal = (e) => {
        e.preventDefault();
        if (!weight) return;

        setSinglePlan(prevState => {
            return [
                ...prevState,
                {
                    ...product,
                    meal: meal,
                    proteins: (Number(product.proteins) * Number(weight) / 100).toFixed(0),
                    carbs: (Number(product.carbs) * Number(weight) / 100).toFixed(0),
                    fats: (Number(product.fats) * Number(weight) / 100).toFixed(0),
                    kcals: (Number(product.kcals) * Number(weight) / 100).toFixed(0),
                    id: Math.random() * 10000,
                    weight: weight,
                }
            ]
        });
    };

    return (
        <Paper
            elevation={3}
            sx={{
                marginTop: 3,
                padding: 2,
                backgroundColor: '#efefef',
                fontSize: 13,
            }}>
            <div className="productList__title-wrapper">
                <h3 className="productList__item-name"> {product.name}, in 100 grams: </h3>
                <DeleteTwoToneIcon
                    fontSize="small"
                    onClick={handleRemoveProduct}
                    sx={{
                        cursor: 'pointer',
                    }}
                />
            </div>

            <p className="productList__item-description">Proteins: {product.proteins}g</p>
            <p className="productList__item-description">Carbs: {product.carbs}g</p>
            <p className="productList__item-description">Fats: {product.fats}g</p>
            <p className="productList__item-description">{product.kcals} kcals</p>

            {!hide &&
                <form onSubmit={handleAddMeal} className="singleProduct__form">

                    <div className="singleProduct__info-wrapper">
                        <input
                            type="number"
                            placeholder="Weight in grams"
                            value={weight}
                            onChange={handleWeightChange}/>


                        <select
                            value={meal}
                            onChange={handleMealChange}>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="snack">Snack</option>
                        </select>
                    </div>


                    <div className="testButton">
                        <Button
                            type="submit"
                            variant="outlined"
                            size="small"
                            sx={{
                                paddingTop: 0,
                                paddingBottom: 0,
                                letterSpacing: 0,
                                color: 'cornflowerblue',
                                textTransform: 'none',
                                textAlign: 'right',
                            }}>
                            Add to plan
                        </Button>
                    </div>


                </form>}
        </Paper>
    );
}

export default SingleProduct;
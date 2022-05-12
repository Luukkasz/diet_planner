import React, {useState} from 'react';
import './AddSinglePlan.scss';

function AddSinglePlan({singlePlan, setSinglePlan, setPlanList}) {
    const [inputPlanName, setInputPlanName] = useState({
        planName: '',
    })
    const handleChange = (e) => setInputPlanName({
        [e.target.name]: e.target.value
    })

    const handleRemoveMeal = (el) => {
        setSinglePlan(singlePlan.filter((singlePlanItem) => {
            return singlePlanItem.id !== el.id;
        }))
    }

    const handleAddPlan = () => {
const xyz = [...singlePlan];
    xyz.push(inputPlanName);


        setPlanList(prevState => {
            return [
                ...prevState,
                    xyz
            ]
        });



    };


    return (
        <div className="productList__wrapper">
            <h2 className="productList__title">Add plan</h2>
            <div className="addPlan__save-wrapper">
                <label htmlFor="planName">
                    Plan name:
                </label>
                <input
                    type="text"
                    id="planName"
                    name="planName"
                    value={inputPlanName.planName}
                    onChange={handleChange}
                />
                <button onClick={handleAddPlan}>Save</button>
            </div>

            <div className="productList__meal">
                <span>Kcals: {singlePlan.reduce((acc, el) => acc + Number(el.kcals), 0)} </span>
                <span>Proteins: {singlePlan.reduce((acc, el) => acc + Number(el.proteins), 0)} </span>
                <span>Carbs: {singlePlan.reduce((acc, el) => acc + Number(el.carbs), 0)} </span>
                <span>Fats: {singlePlan.reduce((acc, el) => acc + Number(el.fats), 0)} </span>
            </div>

            <div className="productList__meal">
                <h3>Breakfast</h3>
                <ul>
                    {singlePlan
                        .filter((el) => el.meal === 'breakfast')
                        .map((el, idx) => {
                            return <li key={idx}>
                                - {el.name} ({el.weight}g) - {el.kcals} kcal | (P/C/F) - {el.proteins}g, {el.carbs}g, {el.fats}g
                                ---
                                <button onClick={() => handleRemoveMeal(el)}>X</button>
                            </li>
                        })}
                </ul>
            </div>

            <div className="productList__meal">
                <h3>Lunch</h3>
                <ul>
                    {singlePlan
                        .filter((el) => el.meal === 'lunch')
                        .map((el, idx) => {
                            return <li key={idx}>
                                - {el.name} ({el.weight}g) - {el.kcals} kcal | (P/C/F) - {el.proteins}g, {el.carbs}g, {el.fats}g
                                ---
                                <button onClick={() => handleRemoveMeal(el)}>X</button>
                            </li>
                        })}
                </ul>
            </div>

            <div className="productList__meal">
                <h3>Dinner</h3>
                <ul>
                    {singlePlan
                        .filter((el) => el.meal === 'dinner')
                        .map((el, idx) => {
                            return <li key={idx}>
                                - {el.name} ({el.weight}g) - {el.kcals} kcal | (P/C/F) - {el.proteins}g, {el.carbs}g, {el.fats}g
                                ---
                                <button onClick={() => handleRemoveMeal(el)}>X</button>
                            </li>
                        })}
                </ul>
            </div>

            <div className="productList__meal">
                <h3>Snacks</h3>
                <ul>
                    {singlePlan
                        .filter((el) => el.meal === 'snack')
                        .map((el, idx) => {
                            return <li key={idx}>
                                - {el.name} ({el.weight}g) - {el.kcals} kcal | (P/C/F) - {el.proteins}g, {el.carbs}g, {el.fats}g
                                ---
                                <button onClick={() => handleRemoveMeal(el)}>X</button>
                            </li>
                        })}
                </ul>
            </div>


        </div>
    );
}

export default AddSinglePlan;
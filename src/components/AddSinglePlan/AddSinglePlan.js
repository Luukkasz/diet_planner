import React, {useState} from 'react';
import './AddSinglePlan.scss';

function AddSinglePlan({singlePlan, setSinglePlan, setPlanList}) {

    const [inputPlanName, setInputPlanName] = useState('')
    const handleChange = (e) => setInputPlanName(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();

        setPlanList(prevState => {
            return [
                ...prevState,
                singlePlan
            ]
        });

        setSinglePlan([]);
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
                    value={inputPlanName}
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Save</button>
            </div>

            <div>
                <span>Kcals: {singlePlan.reduce((acc, el) => acc + el.kcals, 0)} </span>
                <span>Proteins: {singlePlan.reduce((acc, el) => acc + el.proteins, 0)} </span>
                <span>Carbs: {singlePlan.reduce((acc, el) => acc + el.carbs, 0)} </span>
                <span>Fats: {singlePlan.reduce((acc, el) => acc + el.fats, 0)} </span>
            </div>

            <div>
                <h3>Breakfast</h3>
                <ul>
                    {singlePlan
                        .filter((el) => el.meal === 'breakfast')
                        .map((el, idx) => {
                        return <li key={idx}> {el.name} - {el.kcals} - {el.meal} </li>
                    })}
                </ul>
            </div>

            <div>
                <h3>Lunch</h3>
                <ul>
                    {singlePlan
                        .filter((el) => el.meal === 'lunch')
                        .map((el, idx) => {
                            return <li key={idx}> {el.name} - {el.kcals} - {el.meal} </li>
                        })}
                </ul>
            </div>

            <div>
                <h3>Dinner</h3>
                <ul>
                    {singlePlan
                        .filter((el) => el.meal === 'dinner')
                        .map((el, idx) => {
                            return <li key={idx}> {el.name} - {el.kcals} - {el.meal} </li>
                        })}
                </ul>
            </div>

            <div>
                <h3>Snacks</h3>
                <ul>
                    {singlePlan
                        .filter((el) => el.meal === 'snack')
                        .map((el, idx) => {
                            return <li key={idx}> {el.name} - {el.kcals} - {el.meal} </li>
                        })}
                </ul>
            </div>


        </div>
    );
}

export default AddSinglePlan;
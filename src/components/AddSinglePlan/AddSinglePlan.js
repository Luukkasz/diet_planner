import React, {useState} from 'react';
import './AddSinglePlan.scss';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

function AddSinglePlan({singlePlan, setSinglePlan, setPlanList}) {
    const initialInputPlanName = {planName: '', planId: Math.random() * 10000}
    const [inputPlanName, setInputPlanName] = useState(initialInputPlanName)
    const handleChange = (e) => setInputPlanName(prevState => {
        return {
            ...prevState,
            [e.target.name]: e.target.value
        };
    });

    const handleRemoveMeal = (el) => {
        setSinglePlan(singlePlan.filter((singlePlanItem) => {
            return singlePlanItem.id !== el.id;
        }))
    }

    const handleAddPlan = () => {
        if (!inputPlanName.planName || singlePlan.length === 0) return;

        const singlePlanToAdd = [...singlePlan];
        singlePlanToAdd.push(inputPlanName);

        setPlanList(prevState => {
            return [
                ...prevState,
                singlePlanToAdd
            ]
        });

        setSinglePlan([]);
        setInputPlanName(initialInputPlanName);

    };


    return (
        <div className="productList__wrapper">
            <h2 className="addSinglePlan__title">Add plan</h2>
            <div className="addPlan__save-wrapper">
                {/*<label htmlFor="planName">*/}
                {/*    Plan name:*/}
                {/*</label>*/}
                {/*<input*/}
                {/*    type="text"*/}
                {/*    id="planName"*/}
                {/*    name="planName"*/}
                {/*    placeholder="Plan name:"*/}
                {/*    value={inputPlanName.planName}*/}
                {/*    onChange={handleChange}*/}
                {/*/>*/}

                <div className="addSinglePlan__form-wrapper">

                    <TextField
                        id="planName"
                        name="planName"
                        value={inputPlanName.planName}
                        onChange={handleChange}
                        label="Plan name: "
                        variant="standard"
                        autoComplete="off"
                    />

                    {/*<button onClick={handleAddPlan}>Save</button>*/}

                    <Button
                        onClick={handleAddPlan}
                        variant="outlined"
                        size="small"
                        sx={{
                            color: 'cornflowerblue',
                            textTransform: 'none',
                            alignSelf: 'end',
                        }}>
                        Save
                    </Button>

                </div>



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
                                - {el.name} ({el.weight}g) - {el.kcals} kcal | (P/C/F)
                                - {el.proteins}g, {el.carbs}g, {el.fats}g
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
                                - {el.name} ({el.weight}g) - {el.kcals} kcal | (P/C/F)
                                - {el.proteins}g, {el.carbs}g, {el.fats}g
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
                                - {el.name} ({el.weight}g) - {el.kcals} kcal | (P/C/F)
                                - {el.proteins}g, {el.carbs}g, {el.fats}g
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
                                - {el.name} ({el.weight}g) - {el.kcals} kcal | (P/C/F)
                                - {el.proteins}g, {el.carbs}g, {el.fats}g
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
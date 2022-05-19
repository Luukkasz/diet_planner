import React, {useState} from 'react';
import './AddSinglePlan.scss';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';

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
        <div className="addSinglePlan__wrapper">
            <h2 className="addSinglePlan__title">Add plan</h2>
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

            <div className="addSinglePlan__meal">
                <span className="addSinglePlan__infoSpan"><strong>Kcals:</strong> {singlePlan.reduce((acc, el) => acc + Number(el.kcals), 0)} </span>
                <span className="addSinglePlan__infoSpan"><strong>Proteins:</strong> {singlePlan.reduce((acc, el) => acc + Number(el.proteins), 0)} </span>
                <span className="addSinglePlan__infoSpan"><strong>Carbs:</strong> {singlePlan.reduce((acc, el) => acc + Number(el.carbs), 0)} </span>
                <span className="addSinglePlan__infoSpan"><strong>Fats:</strong> {singlePlan.reduce((acc, el) => acc + Number(el.fats), 0)} </span>
            </div>

            <div className="addSinglePlan__meal">
                <h3>Breakfast</h3>
                <ul>
                    {singlePlan
                        .filter((el) => el.meal === 'breakfast')
                        .map((el, idx) => {
                            return <li key={idx} className="addSinglePlan__item">

                                <HighlightOffTwoToneIcon
                                    onClick={() => handleRemoveMeal(el)}
                                    fontSize="small"
                                    sx={{
                                        cursor: 'pointer',
                                    }}/>

                                <span>{el.name} ({el.weight}g - {el.kcals} kcal)</span>
                                <span>(P/C/F) - {el.proteins}g, {el.carbs}g, {el.fats}g.</span>
                            </li>
                        })}
                </ul>
            </div>

            <div className="addSinglePlan__meal">
                <h3>Lunch</h3>
                <ul>
                    {singlePlan
                        .filter((el) => el.meal === 'lunch')
                        .map((el, idx) => {
                            return <li key={idx} className="addSinglePlan__item">

                                <HighlightOffTwoToneIcon
                                    onClick={() => handleRemoveMeal(el)}
                                    fontSize="small"
                                    sx={{
                                        cursor: 'pointer',
                                    }}/>

                                <span>{el.name} ({el.weight}g - {el.kcals} kcal)</span>
                                <span>(P/C/F) - {el.proteins}g, {el.carbs}g, {el.fats}g.</span>
                            </li>
                        })}
                </ul>
            </div>

            <div className="addSinglePlan__meal">
                <h3>Dinner</h3>
                <ul>
                    {singlePlan
                        .filter((el) => el.meal === 'dinner')
                        .map((el, idx) => {
                            return <li key={idx} className="addSinglePlan__item">

                                <HighlightOffTwoToneIcon
                                    onClick={() => handleRemoveMeal(el)}
                                    fontSize="small"
                                    sx={{
                                        cursor: 'pointer',
                                    }}/>

                                <span>{el.name} ({el.weight}g - {el.kcals} kcal)</span>
                                <span>(P/C/F) - {el.proteins}g, {el.carbs}g, {el.fats}g.</span>
                            </li>
                        })}
                </ul>
            </div>

            <div className="addSinglePlan__meal">
                <h3>Snacks</h3>
                <ul>
                    {singlePlan
                        .filter((el) => el.meal === 'snack')
                        .map((el, idx) => {
                            return <li key={idx} className="addSinglePlan__item">

                                <HighlightOffTwoToneIcon
                                    onClick={() => handleRemoveMeal(el)}
                                    fontSize="small"
                                    sx={{
                                        cursor: 'pointer',
                                    }}/>

                                <span>{el.name} ({el.weight}g - {el.kcals} kcal)</span>
                                <span>(P/C/F) - {el.proteins}g, {el.carbs}g, {el.fats}g.</span>
                            </li>
                        })}
                </ul>
            </div>


        </div>
    );
}

export default AddSinglePlan;
import React from 'react';
import './SinglePlan.scss';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import Paper from "@mui/material/Paper";


function SinglePlan({planList, planToShow}) {
    const filteredPlanToShow = [...planToShow].filter(el => !el.planName);

    if (planToShow.length === 0 || !planList.includes(planToShow)) return (
        <div className="singlePlan__wrapper">
            <h2 className="singlePlan__title">
                Plan to show
            </h2>

            <p className="singlePlan__tip">Choose your plan from list</p>
        </div>
    )

    return (
        <div className="singlePlan__wrapper">
            <h2 className="singlePlan__title">
                {planToShow
                    .filter(el => el.planName)
                    .map(el => el.planName)}
            </h2>

            <div className="singlePlan__meal">
                <p className="singlePlan__infoParagraph">Summary:</p>
                <span
                    className="singlePlan__infoSpan"><strong>Kcals:</strong> {filteredPlanToShow.reduce((acc, el) => acc + Number(el.kcals), 0)} </span>
                <span
                    className="singlePlan__infoSpan"><strong>Proteins:</strong> {filteredPlanToShow.reduce((acc, el) => acc + Number(el.proteins), 0)} </span>
                <span
                    className="singlePlan__infoSpan"><strong>Carbs:</strong> {filteredPlanToShow.reduce((acc, el) => acc + Number(el.carbs), 0)} </span>
                <span
                    className="singlePlan__infoSpan"><strong>Fats:</strong> {filteredPlanToShow.reduce((acc, el) => acc + Number(el.fats), 0)} </span>
            </div>

            {filteredPlanToShow.filter((el) => el.meal === 'breakfast').length < 1
                ? null
                : <div className="singlePlan__meal">
                    <h3>Breakfast</h3>
                    <ul>
                        {filteredPlanToShow
                            .filter((el) => el.meal === 'breakfast')
                            .map((el, idx) => {
                                return <Paper
                                    key={idx}
                                    elevation={3}
                                    sx={{
                                        marginTop: 3,
                                        padding: 2,
                                        backgroundColor: '#f3f3f3',
                                        fontSize: 13,
                                    }}>
                                    <div className="singlePlan__title-wrapper">
                                        <StarPurple500Icon fontSize="small"/>
                                        <h3 className="singlePlan__item-name"> {el.name}, {el.weight} grams: </h3>
                                    </div>

                                    <p className="singlePlan__item-description">Proteins: {el.proteins}g</p>
                                    <p className="singlePlan__item-description">Carbs: {el.carbs}g</p>
                                    <p className="singlePlan__item-description">Fats: {el.fats}g</p>
                                    <p className="singlePlan__item-description">{el.kcals} kcals</p>
                                </Paper>
                            })}
                    </ul>
                </div>}

            {filteredPlanToShow.filter((el) => el.meal === 'lunch').length < 1
                ? null
                :
                <div className="singlePlan__meal">
                    <h3>Lunch</h3>
                    <ul>
                        {filteredPlanToShow
                            .filter((el) => el.meal === 'lunch')
                            .map((el, idx) => {
                                return <Paper
                                    key={idx}
                                    elevation={3}
                                    sx={{
                                        marginTop: 3,
                                        padding: 2,
                                        backgroundColor: '#f3f3f3',
                                        fontSize: 13,
                                    }}>
                                    <div className="singlePlan__title-wrapper">
                                        <StarPurple500Icon fontSize="small"/>
                                        <h3 className="singlePlan__item-name"> {el.name}, {el.weight} grams: </h3>
                                    </div>

                                    <p className="singlePlan__item-description">Proteins: {el.proteins}g</p>
                                    <p className="singlePlan__item-description">Carbs: {el.carbs}g</p>
                                    <p className="singlePlan__item-description">Fats: {el.fats}g</p>
                                    <p className="singlePlan__item-description">{el.kcals} kcals</p>
                                </Paper>
                            })}
                    </ul>
                </div>}

            {filteredPlanToShow.filter((el) => el.meal === 'dinner').length < 1
                ? null
                : <div className="singlePlan__meal">
                    <h3>Dinner</h3>
                    <ul>
                        {filteredPlanToShow
                            .filter((el) => el.meal === 'dinner')
                            .map((el, idx) => {
                                return <Paper
                                    key={idx}
                                    elevation={3}
                                    sx={{
                                        marginTop: 3,
                                        padding: 2,
                                        backgroundColor: '#f3f3f3',
                                        fontSize: 13,
                                    }}>
                                    <div className="singlePlan__title-wrapper">
                                        <StarPurple500Icon fontSize="small"/>
                                        <h3 className="singlePlan__item-name"> {el.name}, {el.weight} grams: </h3>
                                    </div>

                                    <p className="singlePlan__item-description">Proteins: {el.proteins}g</p>
                                    <p className="singlePlan__item-description">Carbs: {el.carbs}g</p>
                                    <p className="singlePlan__item-description">Fats: {el.fats}g</p>
                                    <p className="singlePlan__item-description">{el.kcals} kcals</p>
                                </Paper>
                            })}
                    </ul>
                </div>}

            {filteredPlanToShow.filter((el) => el.meal === 'snack').length < 1
                ? null
                : <div className="singlePlan__meal">
                    <h3>Snacks</h3>
                    <ul>
                        {filteredPlanToShow
                            .filter((el) => el.meal === 'snack')
                            .map((el, idx) => {
                                return <Paper
                                    key={idx}
                                    elevation={3}
                                    sx={{
                                        marginTop: 3,
                                        padding: 2,
                                        backgroundColor: '#f3f3f3',
                                        fontSize: 13,
                                    }}>
                                    <div className="singlePlan__title-wrapper">
                                        <StarPurple500Icon fontSize="small"/>
                                        <h3 className="singlePlan__item-name"> {el.name}, {el.weight} grams: </h3>
                                    </div>

                                    <p className="singlePlan__item-description">Proteins: {el.proteins}g</p>
                                    <p className="singlePlan__item-description">Carbs: {el.carbs}g</p>
                                    <p className="singlePlan__item-description">Fats: {el.fats}g</p>
                                    <p className="singlePlan__item-description">{el.kcals} kcals</p>
                                </Paper>
                            })}
                    </ul>
                </div>}
        </div>
    );
}

export default SinglePlan;
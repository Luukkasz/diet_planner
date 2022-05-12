import React from 'react';
import './SinglePlan.scss';


function SinglePlan({planList, planToShow}) {
    const filteredPlanToShow = [...planToShow].filter(el => !el.planName);

    if (planToShow.length === 0 || !planList.includes(planToShow)) return (
        <div className="productList__wrapper">
            <h2 className="productList__title">
                Plan to show
            </h2>
        </div>
    )

    return (
        <div className="productList__wrapper">
            <h2 className="productList__title">
                {planToShow
                    .filter(el => el.planName)
                    .map(el => el.planName)}
            </h2>

            <div className="productList__meal">
                <span>Kcals: {filteredPlanToShow.reduce((acc, el) => acc + Number(el.kcals), 0)} </span>
                <span>Proteins: {filteredPlanToShow.reduce((acc, el) => acc + Number(el.proteins), 0)} </span>
                <span>Carbs: {filteredPlanToShow.reduce((acc, el) => acc + Number(el.carbs), 0)} </span>
                <span>Fats: {filteredPlanToShow.reduce((acc, el) => acc + Number(el.fats), 0)} </span>
            </div>

            <div className="productList__meal">
                <h3>Breakfast</h3>
                <ul>
                    {filteredPlanToShow
                        .filter((el) => el.meal === 'breakfast')
                        .map((el, idx) => {
                            return <li key={idx}>
                                - {el.name} ({el.weight}g) - {el.kcals} kcal | (P/C/F)
                                - {el.proteins}g, {el.carbs}g, {el.fats}g
                            </li>
                        })}
                </ul>
            </div>

            <div className="productList__meal">
                <h3>Lunch</h3>
                <ul>
                    {filteredPlanToShow
                        .filter((el) => el.meal === 'lunch')
                        .map((el, idx) => {
                            return <li key={idx}>
                                - {el.name} ({el.weight}g) - {el.kcals} kcal | (P/C/F)
                                - {el.proteins}g, {el.carbs}g, {el.fats}g
                            </li>
                        })}
                </ul>
            </div>

            <div className="productList__meal">
                <h3>Dinner</h3>
                <ul>
                    {filteredPlanToShow
                        .filter((el) => el.meal === 'dinner')
                        .map((el, idx) => {
                            return <li key={idx}>
                                - {el.name} ({el.weight}g) - {el.kcals} kcal | (P/C/F)
                                - {el.proteins}g, {el.carbs}g, {el.fats}g
                            </li>
                        })}
                </ul>
            </div>

            <div className="productList__meal">
                <h3>Snacks</h3>
                <ul>
                    {filteredPlanToShow
                        .filter((el) => el.meal === 'snack')
                        .map((el, idx) => {
                            return <li key={idx}>
                                - {el.name} ({el.weight}g) - {el.kcals} kcal | (P/C/F)
                                - {el.proteins}g, {el.carbs}g, {el.fats}g
                            </li>
                        })}
                </ul>
            </div>


        </div>
    );
}

export default SinglePlan;
import React from 'react';
import './PlanList.scss';


function PlanList({planList, setPlanList, setPlanToShow}) {

    const handleShowPlan = (planToShow) => {
        console.log(planToShow);
        setPlanToShow(planToShow);
    }

    return (
        <div className="productList__wrapper">
            <h2 className="productList__title">Plan list</h2>
            <div className="productList__input-wrapper">
                <label htmlFor="searchPlan">
                    Search plan:
                </label>
                <input
                    type="text"
                    name="searchPlan"
                    id="searchPlan"
                />
            </div>

            <ul className="productList__list">
                {planList.map((singlePlan,idx) => {
                    return (
                        <li key={idx}>
                            <span>{singlePlan
                                .filter(el => el.planName)
                                .map(el => el.planName)}
                            </span>
                            <button onClick={() => handleShowPlan(singlePlan)}>Show plan</button>
                        </li>
                    )
                })}

            </ul>


        </div>
    );
}

export default PlanList;
import React, {useEffect, useState} from 'react';
import './PlanList.scss';



function PlanList({planList, setPlanList, setPlanToShow}) {

    const handleShowPlan = (planToShow) => setPlanToShow(planToShow);
    const handleRemovePlan = (planToRemove) => {
        const idOfElementToRemove = planToRemove.filter(el => el.planId)[0].planId;
        setPlanList(planList.filter((planListElement) => {
            const idOfElementInList = planListElement.filter(el => el.planId)[0].planId;
            return idOfElementInList !== idOfElementToRemove;
        }))
    }

    const [filteredPlanList, setFilteredPlanList] = useState(planList);
    const [searchPlanInput, setSearchPlanInput] = useState('')

    useEffect(() => setFilteredPlanList(planList), [planList]);

    const handleSearchPlan = (e) => {
        const keyword = e.target.value;
        setSearchPlanInput(keyword);

        if (keyword !== '') {
            const results = planList.filter((plan) => {
                const nameOfPlan = plan.filter(el => el.planName)[0].planName;
                return nameOfPlan.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setFilteredPlanList(results);
        } else {
            setFilteredPlanList(planList);
        }

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
                    value={searchPlanInput}
                    onChange={handleSearchPlan}
                />
            </div>

            <ul className="productList__list">
                {filteredPlanList.map((singlePlan, idx) => {
                    return (
                        <li key={idx}>
                            <span>{singlePlan
                                .filter(el => el.planName)
                                .map(el => el.planName)}
                            </span>
                            <button onClick={() => handleShowPlan(singlePlan)}>Show plan</button>
                            <button onClick={() => handleRemovePlan(singlePlan)}>X</button>
                        </li>
                    )
                })}

            </ul>


        </div>
    );
}

export default PlanList;
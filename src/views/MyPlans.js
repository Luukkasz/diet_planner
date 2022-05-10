import React from 'react';
import './MyPlans.scss';
import PlanList from "../components/PlanList/PlanList";
import SinglePlan from "../components/SinglePlan/SinglePlan";

function MyPlans(props) {
    return (
        <div className="myPlans__container">
            <PlanList />
            <SinglePlan />
        </div>
    );
}

export default MyPlans;
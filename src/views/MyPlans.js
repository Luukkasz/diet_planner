import React, {useState} from 'react';
import './MyPlans.scss';
import PlanList from "../components/PlanList/PlanList";
import SinglePlan from "../components/SinglePlan/SinglePlan";


function MyPlans({planList, setPlanList}) {
    const [planToShow, setPlanToShow] = useState([]);

    return (
        <div className="myPlans__container">
            <PlanList
                planList={planList}
                setPlanList={setPlanList}
                setPlanToShow={setPlanToShow}
            />
            <SinglePlan
                planList={planList}
                setPlanList={setPlanList}
                planToShow={planToShow}
            />
        </div>
    );
}

export default MyPlans;
import React from 'react';
import './SinglePlan.scss';

function SinglePlan({planList, setPlanList, planToShow}) {


    if(planToShow.length === 0) return <div>Brak planu</div>

    return (
        <div className="productList__wrapper">
            <h2 className="productList__title">Plan name:</h2>

            <div>
                <span>Kcals:  </span>
                <span>Proteins:  </span>
                <span>Carbs:  </span>
                <span>Fats:  </span>
            </div>

            <div>
                <h3>Breakfast</h3>
                <ul>

                </ul>
            </div>

            <div>
                <h3>Lunch</h3>
                <ul>

                </ul>
            </div>

            <div>
                <h3>Dinner</h3>
                <ul>

                </ul>
            </div>

            <div>
                <h3>Snacks</h3>
                <ul>

                </ul>
            </div>



        </div>
    );
}

export default SinglePlan;
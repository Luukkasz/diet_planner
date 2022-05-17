import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.scss';

function Navigation(props) {
    return (
        <header className="page__header">
            <div className="container header__container">
                <NavLink to="/">
                    <h1 className="header__title">Diet Planner</h1>
                </NavLink>

                <nav>
                    <ul className="header__list">
                        <li>
                            <NavLink className="header__link" to="/">Main page</NavLink>
                        </li>
                        <li>
                            <NavLink className="header__link" to="addProduct">Add product</NavLink>
                        </li>
                        <li>
                            <NavLink className="header__link" to="myPlans">My plans</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navigation;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Planet = ({ planet, index }) => {

    return (
        <div>
            <div>
                <NavLink to={`planet/${index}/`}>
                    <h1>{planet.name}</h1>
                    <p>{planet.climate}</p>
                    <strong>{planet.population}</strong>
                </NavLink>
            </div>
        </div>
    )
}

export default Planet;
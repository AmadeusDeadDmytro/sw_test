import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {

    return (
        <div>
            <div>
                NotFoundPage
            </div>
            <NavLink
                to="/"
            >
                <div className="app__logo">
                    <div className="app__logo__title">go to Catalog Planet</div>
                </div>
            </NavLink>
        </div>
    )
}

export default NotFoundPage;
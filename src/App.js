import { Route, Switch } from 'react-router-dom';

import PlanetDetailsPage from './pages/PlanetDetailsPage';
import Planets from './pages/Planets';

import './App.css';

export default () => (
        <div>
            <Switch>
                <Route path="/" exact component={Planets} />
                <Route
                    path="/planet/:planetId?"
                    exact
                    render={({ match }) => {
                        return (
                            <PlanetDetailsPage
                                planetId={match.params.planetId}
                            />
                        )
                    }}
                />
            </Switch>
        </div>
)


import { Route, Switch } from 'react-router-dom';

import PlanetDetailsPage from './pages/PlanetDetailsPage';
import Planets from './pages/Planets';
import NotFoundPage from './pages/NotFoundPage';

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
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </div>
)


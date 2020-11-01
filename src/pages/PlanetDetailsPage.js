import React from 'react';
import { useQuery } from 'react-query';
import { NavLink } from 'react-router-dom';
import Resident from '../components/Resident';

const numberCorrect = (number) => {
    return (+number).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$& ').slice(0, -2);
}

const PlanetDetailsPage = ({ planetId }) => {
    const { isLoading, error, data } = useQuery('DataOfPlanet', () => fetch(`https://swapi.dev/api/planets/${planetId}/`).then(res => res.json()))

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div>
            <NavLink to="/">
                <div className="app__logo">
                    <div className="app__logo__title">go to Catalog Planet</div>
                </div>
            </NavLink>
            {data.detail !== 'Not found' ? (
              <div>
                  <div>Name: {data.name}</div>
                  <div>Orbital period: {numberCorrect(data.orbital_period)}</div>
                  <div>Diameter: {numberCorrect(data.diameter)}</div>
                  <div>Climate: {data.climate}</div>
                  <div>Gravity: {data.gravity}</div>
                  <div>Terrain: {data.terrain ? data.terrain : 'no found terrain'}</div>
                  <div>Population: {numberCorrect(data.populations)}</div>
                  <div>Residents: {data.residents.length ? data.residents.map((resident, index) => (
                      <Resident key={index} residentUrl={resident} />
                  )) : (
                      <div>hasn't found</div>
                  )}
                  </div>
              </div>
            ) : (
                <div>{data.detail} this planet</div>
            )}

        </div>
    )
}

export default PlanetDetailsPage;
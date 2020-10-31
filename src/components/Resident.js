import React from 'react';
import { useQuery } from 'react-query';

const Resident = ({ residentUrl }) => {
    const { isLoading, error, data } = useQuery('DataOfPlanetPeople', () => fetch(residentUrl).then(res => res.json()))

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div>
            <div>Name resident: {data.name}</div>
            <div>Gender: {data.gender}</div>
            <div>Eye color: {data.eye_color}</div>
            <div>Hair_color: {data.hair_color}</div>
        </div>
    )
}

export default Resident;
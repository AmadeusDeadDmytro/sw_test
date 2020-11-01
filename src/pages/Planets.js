import React from 'react';
import { useQuery } from 'react-query';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import Planet from '../components/Planet';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    }
});

const Planets = () => {
    const classes = useStyles();
    const { isLoading, error, data } = useQuery('repoData', () => fetch('https://swapi.dev/api/planets/').then(res => res.json()))

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <Container>
            <div className={classes.root}>
                {data.results?.map((planet, index) => (
                    <Planet key={index} planet={planet} index={index + 1} />
                ))}
            </div>
        </Container>

    )
}

export default Planets;
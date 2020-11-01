import React from 'react';
import { useQuery } from 'react-query';
import { NavLink } from 'react-router-dom';
import Resident from '../components/Resident';
import Container from "@material-ui/core/Container";

import SvgIcon from '@material-ui/core/SvgIcon';
import {makeStyles} from "@material-ui/core/styles";
const numberCorrect = (number) => {
    return (+number).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$& ').slice(0, -2);
}

const HomeIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

const useStyles = makeStyles({
    root: {
        borderLeft: '1px solid #82829a',
        borderRight: '1px solid #82829a',
        paddingLeft: '0',
        paddingRight: '0',
    },
    wrapper: {
        borderTop: '1px solid #82829a',
    },
    svg: {
      padding: '10px',
      cursor: 'pointer',
    },
    iconReturn: {
        filter: 'invert(60%)',
        transform: 'rotateY(180deg)',
        color: '#82829a',
        cursor: 'pointer',
        height: 'fit-content'
    },
    infoTextBlock: {
        display: 'flex',
    },
    infoList: {
        paddingBottom: '90px',
        borderBottom: '1px solid #82829a'
    },
    infoItem: {
        padding: '10px 0 10px 0px',
        display: 'flex',
        fontSize: '18px',
        justifyContent: 'space-between',
        color: '#dadbd6'
    },
    infoName: {
        padding: '0 10px',
        minWidth: '110px',
        color: '#82829a'
    },
    title: {
        fontSize: 14,
        color: "#82829a",
        margin: 'auto',
        width: 'fit-content',
    },
    name: {
        fontSize: '24px',
        color: 'rgb(218, 219, 214)',
    }
});

const PlanetDetailsPage = ({ planetId }) => {
    const classes = useStyles();

    const { isLoading, error, data } = useQuery('DataOfPlanet', () => fetch(`https://swapi.dev/api/planets/${planetId}/`).then(res => res.json()))

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <Container className={classes.root}>
            <NavLink to="/">
                <div className={classes.svg}>
                    <div className="app__logo__title"><HomeIcon style={{ color: "#dadbd6" }} fontSize="large"  /></div>
                </div>
            </NavLink>
            {data.detail !== 'Not found' ? (
              <Container className={classes.wrapper}>
                  <div className={classes.title}>
                      <h1>Details</h1>
                  </div>
                  <div className={classes.name}>{data.name}</div>

                  <ul className={classes.infoList}>
                      <li className={classes.infoItem}>
                          <div className={classes.infoTextBlock}>
                              <img className={classes.iconReturn}  src="/keyboard_return-24px.svg"/>
                              <span className={classes.infoName}>Orbital period:</span>
                              <span class="info_value">{numberCorrect(data.orbital_period)}</span>
                          </div>
                      </li>
                      <li className={classes.infoItem}>
                          <div className={classes.infoTextBlock}>
                              <img className={classes.iconReturn} src="/keyboard_return-24px.svg"/>
                              <span className={classes.infoName}>Diameter:</span>
                              <span className="info_value">{numberCorrect(data.diameter)}</span>
                          </div>
                      </li>
                      <li className={classes.infoItem}>
                          <div className={classes.infoTextBlock}>
                              <img className={classes.iconReturn} src="/keyboard_return-24px.svg"/>
                              <span className={classes.infoName}>Climate:</span>
                              <span className="info_value">{data.climate}</span>
                          </div>
                      </li>
                      <li className={classes.infoItem}>
                          <div className={classes.infoTextBlock}>
                              <img className={classes.iconReturn} src="/keyboard_return-24px.svg"/>
                              <span className={classes.infoName}>Gravity:</span>
                              <span className="info_value">{data.gravity}</span>
                          </div>
                      </li>
                      <li className={classes.infoItem}>
                          <div className={classes.infoTextBlock}>
                              <img className={classes.iconReturn} src="/keyboard_return-24px.svg"/>
                              <span className={classes.infoName}>Terrain:</span>
                              <span className="info_value">{data.terrain ? data.terrain : 'no found terrain'}</span>
                          </div>
                      </li>
                      <li className={classes.infoItem}>
                          <div className={classes.infoTextBlock}>
                              <img className={classes.iconReturn} src="/keyboard_return-24px.svg"/>
                              <span className={classes.infoName}>Residents:</span>
                              <span className="info_value">{data.residents.length ? data.residents.map((resident, index) => (
                                  <Resident key={index} residentUrl={resident} propsClasses={classes} />
                              )) : (
                                  <div>hasn't found</div>
                              )}</span>
                          </div>
                      </li>
                  </ul>
              </Container>
            ) : (
                <div>{data.detail} this planet</div>
            )}

        </Container>
    )
}

export default PlanetDetailsPage;
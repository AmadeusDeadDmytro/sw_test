import React from 'react';
import { useQuery } from 'react-query';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginBottom: '10px'
    },
    name: {
        fontSize: '18px',
        color: 'rgb(218, 219, 214)',
    },
    infoItem: {
        padding: '10px 0 5px 0px',
        display: 'flex',
        fontSize: '18px',
        justifyContent: 'space-between',
        color: '#dadbd6'
    },
    iconReturn: {
        color: '#82829a',
        cursor: 'pointer',
        filter: 'invert(60%)',
        width: '10px'
    }
});

const Resident = ({ residentUrl, propsClasses }) => {
    const classes = useStyles()
    const { isLoading, error, data } = useQuery(residentUrl, () => fetch(residentUrl).then(res => res.json()))

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div>
            <div className={classes.name}>{data.name}</div>
            <ul className={classes.root}>
                <li className={classes.infoItem}>
                    <div className={propsClasses.infoTextBlock}>
                        <img className={classes.iconReturn} src="/next.svg"/>
                        <span className={propsClasses.infoName}>Gender resident:</span>
                        <span>{data.gender}</span>
                    </div>
                </li>
                <li className={classes.infoItem}>
                    <div className={propsClasses.infoTextBlock}>
                        <img className={classes.iconReturn} src="/next.svg"/>
                        <span className={propsClasses.infoName}>Eye color:</span>
                        <span>{data.eye_color}</span>
                    </div>
                </li>
                <li className={classes.infoItem}>
                    <div className={propsClasses.infoTextBlock}>
                        <img className={classes.iconReturn} src="/next.svg"/>
                        <span className={propsClasses.infoName}>Birth year:</span>
                        <span>{data.birth_year.toLocaleLowerCase()}</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Resident;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: '10px 10px',
        background: "ButtonShadow"
    },
    title: {
        fontSize: 14,
        color: "WindowText"
    },
    text: {
        fontSize: 16,
        color: "seashell"
    },
    bullet: {
        display: 'inline-block',
        margin: '10px 2px',
        transform: 'scale(0.8)',
        background: "Window"
    },
});

const Planet = ({ planet, index }) => {
    const classes = useStyles();
    const populations = planet.population !== 'unknown' ? (+planet.population).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$& ').slice(0, -2) : 'not population';

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    Name
                </Typography>
                <Typography variant="h5" component="h2" className={classes.text}>
                    {planet.name}
                </Typography>
                <Typography className={classes.title} gutterBottom>
                    Climate
                </Typography>
                <Typography variant="body2" component="h2" className={classes.text}>
                    {planet.climate}
                </Typography>
                <Typography className={classes.title} gutterBottom>
                    Population
                </Typography>
                <Typography variant="body2" component="h2" className={classes.text}>
                    {populations}
                </Typography>
            </CardContent>
            <CardActions>
                <NavLink to={`planet/${index}/`}><Button size="small" className={classes.bullet}> Learn More</Button></NavLink>
            </CardActions>
        </Card>
    )
}

export default Planet;

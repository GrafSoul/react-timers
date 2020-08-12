import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.css';

const Home = () => (
    <div className={classes.Home}>
        <h2>Timers and Clocks</h2>
        <p className={classes.Text}>
            Time countdown app - <Link to={'/demo/timers/timer'}>Timer</Link>
        </p>
        <p className={classes.Text}>
            Application for calculating the elapsed time -{' '}
            <Link to={'/demo/timers/stopwatch'}>Stopwatch</Link>
        </p>
        <p className={classes.Text}>
            Time timer to set time limits for work and leisure -{' '}
            <Link to={'/demo/timers/pomidoro'}>Pomidoro</Link>
        </p>
        <p className={classes.Text}>
            Special hours for playing chess -{' '}
            <Link to={'/demo/timers/chessclock'}>Chess Clock</Link>
        </p>
        <p className={classes.Text}>
            Simple alarm clock -{' '}
            <Link to={'/demo/timers/alarm'}>Alarm Clock</Link>
        </p>
    </div>
);

export default Home;

import React from 'react';

import classes from './Navigation.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = () => (
    <ul className={classes.Navigation}>
        <NavigationItem link="/demo/timers/" exact>
            Home
        </NavigationItem>
        <NavigationItem link="/demo/timers/timer">Timer</NavigationItem>
        <NavigationItem link="/demo/timers/stopwatch">Stopwatch</NavigationItem>
        <NavigationItem link="/demo/timers/pomidoro">Pomidoro</NavigationItem>
        <NavigationItem link="/demo/timers/chessclock">
            Chess Clock
        </NavigationItem>
        <NavigationItem link="/demo/timers/alarm">Alarm Clock</NavigationItem>
    </ul>
);

export default Navigation;

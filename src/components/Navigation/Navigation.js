import React from 'react';

import classes from './Navigation.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = () => (
    <ul className={classes.Navigation}>
        <NavigationItem link="/react-timers" exact>
            Home
        </NavigationItem>
        <NavigationItem link="/react-timers/timer">Timer</NavigationItem>
        <NavigationItem link="/react-timers/stopwatch">
            Stopwatch
        </NavigationItem>
        <NavigationItem link="/react-timers/pomidoro">Pomidoro</NavigationItem>
        <NavigationItem link="/react-timers/chessclock">
            Chess Clock
        </NavigationItem>
        <NavigationItem link="/react-timers/alarm">Alarm Clock</NavigationItem>
    </ul>
);

export default Navigation;

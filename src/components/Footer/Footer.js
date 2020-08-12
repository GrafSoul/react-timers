import React from 'react';

import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <p className={classes.FooterText}>
                &copy; Developed by Dmitriy Zatulovskiy -{' '}
                <a
                    href="https://github.com/Xgraf/react-timers"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
            </p>
            <p className={classes.FooterText}>
                Made using{' '}
                <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React
                </a>
                ,{' '}
                <a
                    href="https://redux.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Redux
                </a>{' '}
                and{' '}
                <a
                    href="https://github.com/gaearon/redux-thunk"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React-Thunk
                </a>{' '}
                +{' '}
                <a
                    href="https://fontawesome.com/icons?d=gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    FontAwesome
                </a>{' '}
                and{' '}
                <a
                    href="https://getbootstrap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Bootstrap 4
                </a>
                .
            </p>
        </div>
    );
};

export default Footer;

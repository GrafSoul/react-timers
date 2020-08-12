import React, { Component } from 'react';

import classes from './Layout.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Aux from '../../hoc/AuxComponent/AuxComponent';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    };

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };

    render() {
        return (
            <Aux>
                <div className={classes.Layout}>
                    <Header
                        drawerToggleClicked={this.sideDrawerToggleHandler}
                    />
                    <SideDrawer
                        open={this.state.showSideDrawer}
                        closed={this.sideDrawerClosedHandler}
                    />
                    <main>{this.props.children}</main>
                    <Footer />
                </div>
            </Aux>
        );
    }
}

export default Layout;

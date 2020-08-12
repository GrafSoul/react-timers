import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Timer from './containers/Timer/Timer';
import Stopwatch from './containers/Stopwatch/Stopwatch';
import Pomidoro from './containers/Pomidoro/Pomidoro';
import ChessClock from './containers/ChessClock/ChessClock';
import Alarm from './containers/Alarm/Alarm';

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/react-timers/alarm" component={Alarm} />
                        <Route
                            path="/react-timers/chessclock"
                            component={ChessClock}
                        />
                        <Route
                            path="/react-timers/pomidoro"
                            component={Pomidoro}
                        />
                        <Route
                            path="/react-timers/stopwatch"
                            component={Stopwatch}
                        />
                        <Route
                            path="/react-timers/timer"
                            exact
                            component={Timer}
                        />
                        <Route path="/react-timers" exact component={Home} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;

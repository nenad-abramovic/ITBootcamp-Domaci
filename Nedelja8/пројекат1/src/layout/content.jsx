import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { PastLList } from '../components/past-l-list';
import { UpcomingLList } from '../components/upcoming-l-list';

export const Content = () => {
    return (
        <Router>
            <div className="content">
                <ul>
                    <li><Link to="/" className="link">Past Launches</Link></li>
                    <li><Link to="/future" className="link">Upcoming Launches</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={PastLList} />
                    <Route path="/future" component={UpcomingLList} />
                </Switch>
            </div>
        </Router>
    );
}
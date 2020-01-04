import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from './react-router-dom'
import Home from './component/Home'
import User from './component/User'
import Profile from './component/Profile'
import Login from './component/Login'
import Protected from './component/Protected'
import MenuLink from './component/MenuLink'
import NavHeader from './component/NavHeader'

ReactDOM.render(
    <Router>
        <>
            <div className="navbar navbar-inverse">
                <div className="container-fluid">
                    <NavHeader />
                    <ul className="nav navbar-nav">
                        <li><MenuLink exact={true} to="/">Home</MenuLink></li>
                        <li><MenuLink to="/user">User</MenuLink></li>
                        <li><MenuLink to="/profile">Profile</MenuLink></li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Switch>
                            <Route path="/" exact={true} component={Home} />
                            <Route path="/user" component={User} />
                            <Route path="/login" component={Login} />
                            {/* 受保护路由 */}
                            <Protected path="/profile" component={Profile} />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    </Router>
    , document.getElementById('root'));


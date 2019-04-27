import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route,Link, BrowserRouter as Router,Switch}from 'react-router-dom'
import Home from './component/Home';
import Content from './component/Content';
import PagenotFound from './component/Pagenotfound';
const routing= (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">App</Link>
                </li>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/Content">Content</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path='/' component={App}></Route>
                <Route  path='/home' component={Home}></Route>
                <Route  path='/Content' component={Content}></Route>
                <Route component={PagenotFound}></Route>
            </Switch>
                
                    
        </div>
    </Router>

)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

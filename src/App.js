import React, {Component} from 'react';

import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Home} from './containers/HomeContainer';
import BackButton from './components/BackButton';
import { AddField } from './containers/AddFieldContainer';
import AppReducer from './reducers/AppReducer'
import './App.css';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const store = createStore(AppReducer)
class App extends Component {

    render() {
        return (
            <Router>
                <Provider store={store}>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/(.+)" component={BackButton}/>

                    <Route path="/addField" component={AddField}/>

                </Provider>
            </Router>
        );
    }
}

export default App;

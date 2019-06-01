import React, {Component} from 'react';
import createClass from 'create-react-class';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './bootstrap.min.css';
import './index.css';
import App from './App';
//You need this npm package to do createReactClass

ReactDOM.render(<App/>, document.getElementById('root'));
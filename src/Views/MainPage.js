import React from 'react';
import ReactDOM from 'react-dom';
import createClass from 'create-react-class';
import Navigation from '../Components/Navigation';
import './MainPage.css';
import Tabbing from '../Components/Tabbing';

class MainPage extends React.Component{
    render () {
        return (
            <div className="container">
                Welcome To Humpback Company!
            </div>
        );
    }
}

ReactDOM.render(
        <MainPage />
  , document.getElementById('root'));

export default MainPage;
import './sass/bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

ReactDOM.render(
    <Header title="our custom message" />,
    document.getElementById('root')
)


// document.body.innerHTML = "<h1>hello we appended this!</h1>";
import './sass/bootstrap/scss/bootstrap.scss';
// import './sass/main.scss';
import './sass/resume.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';

ReactDOM.render(
    // <Home></Home>,
    <Home title="title given when home is instantiated"></Home>,
    document.getElementById('root')
)


// document.body.innerHTML = "<h1>hello we appended this!</h1>";
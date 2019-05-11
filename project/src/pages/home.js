import React from 'react';
import Header from '../components/header';
import Grid from '../components/grid';

export default class Home extends React.Component {
    render() {
        let myVar = "crap";
        return (
            <div>
                <Header title="HipsterCode"></Header>
                <Grid dynamicTitle={"testing " + myVar} />
                {/* <img src="https://assets.wordpress.envato-static.com/uploads/2017/08/tropical-PS53BSA.jpg"></img> */}
            </div>

        )
    }
}
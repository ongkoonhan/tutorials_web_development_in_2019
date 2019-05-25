import React from 'react';
import Header from '../components/header';
import Grid from '../components/grid';
import Button from "../components/button";
import Image from "../components/image";


export default class Home extends React.Component {
    render() {
        let myVar = "crap";
        return (
            <div>
                {/* <Button></Button> */}

                <Image classes="new image class"/>

                {/* // Header with ternary statement (like if-else) */}
                <Header title={this.props.title ? this.props.title : "no title given"}></Header>
                
                {/* // Header with title */}
                {/* <Header title="HipsterCode"></Header> */}
                
                {/* // using function */}
                <Grid data={[<div><h1>random html header</h1></div>, "two", "three"]} />   
                
                {/* // using dynamicTitle */}
                {/* <Grid dynamicTitle={"testing " + myVar} />    */}
                
                {/* <img src="https://assets.wordpress.envato-static.com/uploads/2017/08/tropical-PS53BSA.jpg"></img> */}
            </div>

        )
    }
}
import React from 'react';

export default class Grid extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* // Using function */}
                    {this.props.data.map((item, index) => {   
                        return (
                            <div className="col-sm" key={index}>   {/* key given */}
                                {item}
                            </div>
                        )
                    })}
                    
                    {/* // Using props.dynamicTitle */}
                    {/* <div className="col-sm">
                        {this.props.dynamicTitle}
                    </div> */}
                </div>
            </div>

        )
    }
}


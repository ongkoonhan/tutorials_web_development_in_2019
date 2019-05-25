import React from 'react';

export default class Image extends React.Component {
    render() {
        let customClass = this.props.classes ? this.props.classes : "img-fluid"
        return (
            <img src="http://www.totopets.com/img/cutest-animals/Cute-Baby-Panda.jpg" class={customClass} alt="Responsive image"></img>

        )
    }
}




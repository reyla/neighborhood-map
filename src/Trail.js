import React from 'react'

class Trail extends React.Component {

    render() {
        
        return (
        
            <div id="trail-item">         
            ${this.props.trail.name}
            </div>
            )
    }
}

export default Trail
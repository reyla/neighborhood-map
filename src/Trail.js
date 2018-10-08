import React from 'react'

class Trail extends React.Component {

    render() {
        
        return (
        
            <div className="trail-item">         
                <div className="trail-img"><img src={this.props.trail.imgSmall}/></div>
                <div className="trail-details">
                    <h3>{this.props.trail.name}</h3>
                    <p>Length: {this.props.trail.length} miles<br/>
                    Difficulty: {this.props.trail.difficulty}</p>
                    <p>{this.props.trail.summary}</p>
                </div>
            </div>
            )
    }
}

export default Trail
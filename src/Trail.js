import React from 'react'
import { Online } from "react-detect-offline";

class Trail extends React.Component {

    render() {
        const { onListClick,
        } = this.props  

        return (
        
            <div className="trail-item" onClick={(evt) => {onListClick(evt)}}>         
                <div className="trail-img"><img src={this.props.trail.imgSmall} alt={this.props.trail.name}/></div>
                <div className="trail-details">
                    <h3>{this.props.trail.name}</h3>
                    <p>Length: {this.props.trail.length} miles<br/>
                    Difficulty: {this.props.trail.difficulty}</p>
                    <p>{this.props.trail.summary}</p>
                    <Online>
                        <div>
                            <a href={this.props.trail.url}>Learn more on HikingProject.com</a>
                        </div>
                    </Online>
                </div>
            </div>
            )
    }
}

export default Trail
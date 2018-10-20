import React from "react";
import { Online } from "react-detect-offline";

class Trail extends React.Component {
  render() {
    return (
      <div
        className="trail-item"
        onClick={evt => {
          this.props.onClick(evt, this.props.trail);
        }}
        role="button"
      >
        <div className="trail-img">
          <img src={this.props.trail.imgSmall} alt={this.props.trail.name} />
        </div>
        <div className="trail-details">
          <h2 title="View trail on map">{this.props.trail.name}</h2>
          <p>
            Length: {this.props.trail.length} miles
            <br />
            Difficulty: {this.props.trail.difficulty}
          </p>
          <p>{this.props.trail.summary}</p>
          <Online>
            <div>
              <a href={this.props.trail.url}>Learn more on HikingProject.com</a>
            </div>
          </Online>
        </div>
      </div>
    );
  }
}

export default Trail;

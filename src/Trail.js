import React from "react";

class Trail extends React.Component {
  render() {
    return (
      <div
        className="trail-item"
        onClick={evt => {
          this.props.onClick(evt, this.props.trail);
        }}
      >
        <div className="trail-img">
          <img src={this.props.trail.imgSmall} alt={this.props.trail.name} />
        </div>
        <div className="trail-details">
          <h2 title="View trail on map" tabIndex="0">
            {this.props.trail.name}
          </h2>
          <p>
            Length: {this.props.trail.length} miles
            <br />
            Difficulty: {this.props.trail.difficulty}
          </p>
          <p>{this.props.trail.summary}</p>

          <a
            href={this.props.trail.url}
            style={{ visibility: this.props.online ? "hidden" : "visible" }}
          >
            Learn more on HikingProject.com
          </a>
        </div>
      </div>
    );
  }
}

export default Trail;

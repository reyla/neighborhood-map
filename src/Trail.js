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
          <img src={this.props.trail.imgSmall} alt={this.props.trail.name} title={this.props.trail.name}/>
        </div>
        <div className="trail-details">
          <h2 title="View trail on map" tabIndex="0">
            {this.props.trail.name}
          </h2>
          <p>
            Length: {this.props.trail.length} miles <br />
            Difficulty: {this.props.checkDifficulty(this.props.trail)}
          </p>
          <p>{this.props.trail.summary}</p>

          
        </div>
        <a
            href={this.props.trail.url}
            className={this.props.onlineREI ? null : 'hidden'}
          >
            Learn more at HikingProject.com <i className="fas fa-external-link-square-alt"></i>
          </a>
      </div>
    );
  }
}

export default Trail;

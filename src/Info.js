import React from "react";
import Trail from "./Trail";

class Info extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.maxLength !== prevProps.maxLength) {
      this.props.updateMarkers();
    }
  }

  render() {
    const { onChangeMaxLength } = this.props;

    return (
      <div id="content">
        <h1>Hiking Trails Map</h1>
        <p>
          This app displays hiking trails around Carrboro, NC. Trail
          info is from{" "}
          <a href="http://hikingproject.com" title="HikingProject.com">
            HikingProject.com
          </a>
          .
        </p>
        <p id ="filter-label">Filter by maximum trail length.</p>
        <select
          aria-labelledby="filter-label"
          value={this.props.maxLength ? this.props.maxLength : "20"}
          onChange={value => {
            onChangeMaxLength(value);
          }}
        >
          <option value="selectMaxLength">Select max length...</option>
          <option value="20">All Results</option>
          <option value="3">Max 3 miles</option>
          <option value="5">Max 5 miles</option>
          <option value="7">Max 7 miles</option>
        </select>
        <p>Currently showing {this.props.trails.length} results.</p>
        <ol id="trail-list-dynamic">
          {this.props.trails.map(trail => (
            <li key={trail.id}>
              <Trail trail={trail} onClick={this.props.onListClick} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Info;

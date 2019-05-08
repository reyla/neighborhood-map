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
      <section
        id="sidebar"
        style={{ width: this.props.isSidebarOpen ? "100%" : 0 }}
        aria-expanded="true"
        aria-hidden="false"
      >
        <div id="content">
          <h1>Hiking Trails Map</h1>
          <button
            id="backButton"
            type="button"
            onClick={this.props.handleMenuClick}
            aria-label="Close sidebar"
          >
          Close
        </button>
          <p>
            This app displays hiking trails around Carrboro, NC. Trail info is
            from{" "}
            <a href="http://hikingproject.com" title="HikingProject.com">
              HikingProject.com
            </a>
            .
          </p>

          <p id="filter-label">Filter by maximum trail length:</p>
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
            <option value="8">Max 8 miles</option>
          </select>
          <p id="results-full-text">Showing <span id="results-number">{this.props.trails.length}</span> results</p>
          <p id="offline-message-sidebar" className={this.props.onlineREI ? "hidden" : null}>
            Live data is not currently available. This trail data may be outdated.
          </p>
          <ol id="trail-list-dynamic">
            {this.props.trails.map(trail => (
              <li key={trail.id}>
                <Trail
                  trail={trail}
                  onClick={this.props.onListClick}
                  checkDifficulty={this.props.checkDifficulty}
                  onlineREI={this.props.onlineREI}
                />
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }
}

export default Info;

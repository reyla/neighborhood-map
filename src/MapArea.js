import React from "react";
import staticmap from "./img/staticmap.png";

class MapArea extends React.Component {
  render() {
    return (
      <section id="mapsection">
        <div
          id="map"
          aria-label="Hiking trails map"
          role="application"
          style={{ height: this.props.onlineGoogle ? "100vh" : 0 }}
        />
        <img
          src={staticmap}
          alt="Static map of Hiking Trails"
          className={this.props.onlineGoogle ? "hidden" : "full"}
        />
        <button
          id="sidebarButton"
          type="button"
          style={{
            visibility: this.props.isSidebarOpen ? "hidden" : "visible"
          }}
          onClick={this.props.handleMenuClick}
        >
          List View
        </button>
        <p id="offline-message" className={this.props.onlineGoogle ? "hidden" : null}>
          Sorry, we had trouble connecting to Google Maps. Please check your internet
          connection and try again.
        </p>
      </section>
    );
  }
}

export default MapArea;

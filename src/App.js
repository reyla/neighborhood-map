/* TODO:
 * - when user selects new max length, filter map markers based on desired max length
 * - when user clicks on list item, the map marker should bounce
 */

import React, { Component } from "react";
import Info from "./Info";
import origTrails from "./OrigTrails";
import "./App.css";
import axios from "axios";
import { Offline, Online } from "react-detect-offline";
import staticmap from "./img/staticmap.png";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
console.log(API_KEY)

class App extends Component {
  state = {
    isSidebarOpen: false,
    maxLength: 20,
    markers: [],
    map: null,
    infowindow: null,
    currentTrails: []
  };

  componentDidMount() {
    this.getTrails();
  }

  /* Pull locations from HikingProject api */
  getTrails = () => {
    const endPoint = "https://www.hikingproject.com/data/get-trails?";
    const parameters = {
      key: "7127990-5024e929ecbd22e7834e19ea1890f393",
      lat: "35.909967",
      lon: "-79.075229",
      maxDistance: 100,
      maxResults: 20,
      sort: "distance" /* quality or distance */
    };
    axios
      .get(endPoint + new URLSearchParams(parameters))
      // first get the array of trails before rendering the map
      .then(response => {
        this.setState(
          {
            currentTrails: response.data.trails
          },
          this.renderMap()
        );
      })
      .catch(error => {
        console.log("Error fetching trails." + error);
        this.setState({
          // if not online, use static trail data
          currentTrails: origTrails
        });
      });
  };

  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDAKvy5lm0G0jkaL6-OwZRqZtv9d4Cgqqw&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    // create a new google map
    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 35.909967, lng: -79.075229 },
      zoom: 10
    });
    // create a generic infowindow
    let infowindow = new window.google.maps.InfoWindow({ maxWidth: 300 });
    this.setState({
      map: map,
      infowindow: infowindow
    });
    let bounds = new window.google.maps.LatLngBounds();
    // Loop over each trail in state array to create dynamic markers
    let markersArray = this.state.currentTrails.map(thisTrail => {
      // create content for infowindow
      let content = this.buildInfowindowContent(thisTrail);
      // create map marker for the trail
      let marker = new window.google.maps.Marker({
        position: { lat: thisTrail.latitude, lng: thisTrail.longitude },
        map: map,
        key: thisTrail.id,
        title: thisTrail.name,
        animation: window.google.maps.Animation.DROP
      });
      // extend the map boundaries
      bounds.extend(marker.position);
      // click on marker to see location info
      marker.addListener("click", function() {
        // change the content of infowindow
        infowindow.setContent(content);
        // set position of infowindow
        infowindow.setPosition(marker.position);
        // center the selected marker on the map
        map.setCenter(marker.position);
        // open infowindow
        infowindow.open(map, marker);
        // bounce the marker icon for 2 seconds
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        setTimeout(() => marker.setAnimation(null), 2000);
      });
      return marker;
    });
    this.setState({ markers: markersArray });
  };

  /* create infowindow content for map view when marker is clicked */
  buildInfowindowContent(marker) {
    let image = marker.imgSmall;
    return (
      '<div id="popup">' +
      '<img src="' +
      image +
      '"/>' +
      '<h3 id="trailName">' +
      `${marker.name}` +
      "</h3>" +
      '<p id="trailInfo">Length: ' +
      `${marker.length}` +
      " miles<br/> Difficulty: " +
      `${marker.difficulty}` +
      '</p><p id="trailSummary">' +
      `${marker.summary}` +
      '</p> <a href="' +
      `${marker.url}` +
      '">Learn more on HikingProject.com</a></div>'
    );
  }

  /* function that controls the sidebar opening */
  handleMenuClick() {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
    // control aria attributes
    let sidebar = document.querySelector("#sidebar");
    sidebar.getAttribute("aria-hidden") === "true"
      ? sidebar.setAttribute("aria-hidden", "false")
      : sidebar.setAttribute("aria-hidden", "true");
    sidebar.getAttribute("aria-expanded") === "false"
      ? sidebar.setAttribute("aria-expanded", "true")
      : sidebar.setAttribute("aria-expanded", "false");
  }

  /* when user clicks on list item in sidebar */
  listClick = (event, trail) => {
    const { map, infowindow, markers} = this.state;
    markers.forEach(marker => {
      if (trail.id === marker.key) {
        // pretend someone clicked on the marker icon
        // center the selected marker on the map
        map.setCenter(marker.position);
        // create content for infowindow
        let content = this.buildInfowindowContent(trail);
        infowindow.setContent(content);
        // set position of infowindow
        infowindow.setPosition(marker.position);
        // open infowindow
        infowindow.open(map, marker); // causes an error!
        // bounce the marker icon for 2 seconds
        marker.setAnimation(window.google.maps.Animation.BOUNCE)
        setTimeout(() => marker.setAnimation(null), 2000)
      }
    });
    // force close the sidebar
    this.handleMenuClick();
  };

  /* change maxLength when user selects different maximum trail length in sidebar filter*/
  changeMaxLength = value => {
    // pull the desired max length from the value user selected
    let trailLength = value.target.value;
    // change from string to number
    let number = parseInt(trailLength);
    // update the maxLength state
    this.setState({ maxLength: number });
  };

  updateMarkers() {
    // update the markers
    let updatedMarkers = this.state.markers.forEach(marker => {
      if (marker.length > this.state.maxLength) {
        console.log(marker.visible);
        marker.setVisible(false); // this causes an error
      }
    });
    this.setState({ markers: updatedMarkers });
  };

  render() {
    return (
      <main>
        <Online>
          <div id="map" aria-label="hiking trails map" role="application" />
        </Online>
        <Offline>
          <div id="offline">
            <p id="offline-message">You are offline.</p>
            <img src={staticmap} alt="Static Map of Hiking Trails" />
          </div>
        </Offline>
        <button
          id="sidebarButton"
          autoFocus="True"
          type="button"
          onClick={this.handleMenuClick.bind(this)}
        >
          List View
        </button>
        <div
          id="sidebar"
          style={{ width: this.state.isSidebarOpen ? "100%" : 0 }}
          aria-expanded="false"
          aria-hidden="true"
        >
          <button
            id="backButton"
            type="button"
            onClick={this.handleMenuClick.bind(this)}
          >
            Map View
          </button>
          <Info
            trails={this.state.currentTrails.filter(trail => {
              return trail.length <= this.state.maxLength;
            })}
            markers={this.state.markers}
            maxLength={this.state.maxLength}
            onChangeMaxLength={this.changeMaxLength.bind(this)}
            updateMarkers={this.updateMarkers.bind(this)}
            onListClick={this.listClick.bind(this)}
          />
        </div>
      </main>
    );
  }
}

/*
This function adds script html to index file to load the google map
*/
function loadScript(url) {
  // find the first script tag in index.html
  var index = window.document.getElementsByTagName("script")[0];
  // create a new script tag and add properties
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  // put the new script tag before the first one that was found
  index.parentNode.insertBefore(script, index);
}

export default App;

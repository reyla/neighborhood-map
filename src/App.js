// TODO: in checkDifficulty function, use image instead of text. 
// I tried return `<img src="${blue}"/>`; but didn't work.

import React, { Component } from "react";
import MapArea from "./MapArea";
import Info from "./Info";
import origTrails from "./OrigTrails";
import "./App.css";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

class App extends Component {
  state = {
    isSidebarOpen: true,
    maxLength: 20,
    markers: [],
    map: null,
    infowindow: null,
    currentTrails: [],
    online: true
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
      maxResults: 40,
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
        console.log("Error fetching trail data. " + error);
        this.setState({
          online: false,
          // if not online, use static trail data
          currentTrails: origTrails.origTrails
        });
      });
  };

  renderMap = () => {
    const testUrl =
      "https://maps.googleapis.com/maps/api/staticmap?size=600x500&maptype=roadmap&markers=color:red%7C35.9259,-79.0323&key=" +
      API_KEY;
    // make sure we can connect to google using the API key
    axios
      .get(testUrl)
      .then(() => {
        loadScript(
          "https://maps.googleapis.com/maps/api/js?key=" +
            API_KEY +
            "&callback=initMap"
        );
        window.initMap = this.initMap;
      })
      .catch(error => {
        console.log("Error connecting to google maps api. " + error);
        this.setState({
          online: false
        });
      });
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
        map.panTo(marker.position);
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
    let difficulty = this.checkDifficulty(marker);
    return (
      '<div id="popup">' +
      '<img src="' +
      image +
      '" alt="' +
      `${marker.name}` +
      ' photo" /><h3 id="trailName">' +
      `${marker.name}` +
      "</h3>" +
      '<p id="trailInfo">Length: ' +
      `${marker.length}` +
      " miles<br/> Difficulty: " +
      `${difficulty}` +
      '</p><p id="trailSummary">' +
      `${marker.summary}` +
      '</p> <a href="' +
      `${marker.url}` +
      '">Learn more at HikingProject.com</a></div>'
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
    const { map, infowindow, markers } = this.state;
    markers.forEach(marker => {
      if (trail.id === marker.key) {
        // pretend someone clicked on the marker icon
        // center the selected marker on the map
        map.panTo(marker.position);
        // create content for infowindow
        let content = this.buildInfowindowContent(trail);
        infowindow.setContent(content);
        // set position of infowindow
        infowindow.setPosition(marker.position);
        // open infowindow
        infowindow.open(map, marker);
        // bounce the marker icon for 2 seconds
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        setTimeout(() => marker.setAnimation(null), 2000);
      }
    });
    // force close the sidebar
    // this.handleMenuClick();
  };

  /* change maxLength when user selects different maximum trail length in sidebar filter*/
  changeMaxLength = value => {
    // pull the desired max length from the value user selected
    let trailLength = value.target.value;
    // change from string to number
    let number = parseInt(trailLength);
    // update the maxLength state
    this.setState({ maxLength: number });
    // once the Info component updates, the updateMarkers function is called
  };

  updateMarkers = () => {
    // reset all markers back to visible so that we start with 20 before filtering
    this.state.markers.forEach(marker => {
      marker.setVisible(true);
    });
    // create new array of trails that don't meet maxLength criteria
    let trailsToHide = this.state.currentTrails.filter(trail => {
      return trail.length > this.state.maxLength;
    });
    // update their markers to be invisible
    trailsToHide.forEach(trail =>
      this.state.markers.forEach(marker => {
        if (trail.id === marker.key) {
          marker.setVisible(false);
        }
      })
    );
  };

  /* trail difficulty is provided by api as names of colors (dumb).
   * this function changes the color to appropriate description. */
  checkDifficulty = trail => {
    switch (trail.difficulty) {
      case "green":
        return "Easy";
      case "greenblue":
        return "Easy/Intermediate";
      case "blue":
        return "Intermediate";
      case "blueblack":
        return "Intermediate/Difficult";
      case "black":
        return "Difficult";
      case "double black":
        return "Extremely Difficult";
    }
  };

  render() {
    return (
      <main>
        <Info
          trails={this.state.currentTrails.filter(trail => {
            return trail.length <= this.state.maxLength;
          })}
          markers={this.state.markers}
          maxLength={this.state.maxLength}
          online={this.state.online}
          isSidebarOpen={this.state.isSidebarOpen}
          onChangeMaxLength={this.changeMaxLength.bind(this)}
          updateMarkers={this.updateMarkers.bind(this)}
          onListClick={this.listClick.bind(this)}
          checkDifficulty={this.checkDifficulty.bind(this)}
          handleMenuClick={this.handleMenuClick.bind(this)}
        />

        <MapArea
          online={this.state.online}
          isSidebarOpen={this.state.isSidebarOpen}
          handleMenuClick={this.handleMenuClick.bind(this)}
        />
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

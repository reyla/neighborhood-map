/* TODO:
 * - when user selects new max length, filter map markers based on desired max length
 * - when user clicks on list item, the map marker should bounce
 */

import React, { Component } from 'react';
import Info from './Info';
import origTrails from './OrigTrails';
import './App.css';
import axios from 'axios';
import { Offline, Online } from "react-detect-offline";
import staticmap from './img/staticmap.png';


class App extends Component {

  state = {
    isSidebarOpen: false,
    maxLength: 20,
    markers: [],
    map: null,
    infowindow: null,
    currentTrails: [],
  }

  componentDidMount() {
    this.getTrails()
  }
  
  /* Pull locations from HikingProject api */
  getTrails = () => {
    const endPoint = "https://www.hikingproject.com/data/get-trails?"
    const parameters = {
      key: '7127990-5024e929ecbd22e7834e19ea1890f393',
      lat: '35.909967',
      lon: '-79.075229',
      maxDistance: 100,
      maxResults: 20,
      sort: 'distance',  /* quality or distance */
    }
    axios.get(endPoint + new URLSearchParams(parameters))
      // first get the array of trails before rendering the map
      .then(response => {
        this.setState({
          currentTrails: response.data.trails
        }, this.renderMap())
      })
      .catch(error => {
        console.log("Error fetching trails." + error)
        this.setState({ 
          // if not online, use static trail data
          currentTrails: origTrails
        })
      })
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDAKvy5lm0G0jkaL6-OwZRqZtv9d4Cgqqw&callback=initMap")
    window.initMap = this.initMap
  }
  
  initMap = () => {
    // create a new google map
    var map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: 35.909967, lng: -79.075229},
        zoom: 10
    })
    let bounds = new window.google.maps.LatLngBounds();
    // Loop over each trail in state array to create dynamic markers
    let markersArray = this.state.currentTrails.map(thisTrail => {
      // create a generic infowindow
      let infowindow = new window.google.maps.InfoWindow({ maxWidth: 300 })
      this.setState({
        map: map,
        infowindow: infowindow
      });      
      // create content for infowindow
      let image = thisTrail.imgSmall
      let contentString = '<div id="popup">' + 
          '<img src="' + image + '"/>' + 
          '<h3 id="trailName">' + 
          `${thisTrail.name}` +
          '</h3>' +
          '<p id="trailInfo">Length: ' +
          `${thisTrail.length}` +
          ' miles<br/> Difficulty: ' +
          `${thisTrail.difficulty}` +
          '</p><p id="trailSummary">' + 
          `${thisTrail.summary}` +
          '</p> <a href="' +
          `${thisTrail.url}` +
          '">Learn more on HikingProject.com</a></div>'
      // create map marker for the trail   
      let marker = new window.google.maps.Marker({
          position: {lat: thisTrail.latitude, lng: thisTrail.longitude},
          map: map,
          key: thisTrail.id,
          title: thisTrail.name,
          animation: window.google.maps.Animation.DROP
      })
      // extend the map boundaries
      bounds.extend(marker.position)
      // click on marker to see location info
      marker.addListener('click', function() {
          // change the content of infowindow
          infowindow.setContent(contentString)
          // center the selected marker on the map
          map.panTo(marker.getPosition())
          // open infowindow
          infowindow.open(map, marker)
          // bounce the marker icon for 2 seconds
          marker.setAnimation(window.google.maps.Animation.BOUNCE)
          setTimeout(() => marker.setAnimation(null), 2000)
      })
      return thisTrail
    })
    this.setState({ markers: markersArray })
    console.log('Current markers:', this.state.markers)
  }
  
  /* function that controls the sidebar opening */
  handleMenuClick() {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen })
    // control aria attributes
    let sidebar = document.querySelector('#sidebar')
    sidebar.getAttribute('aria-hidden') === 'true' ? sidebar.setAttribute('aria-hidden', 'false') : sidebar.setAttribute('aria-hidden', 'true')
    sidebar.getAttribute('aria-expanded') === 'false' ? sidebar.setAttribute('aria-expanded', 'true') :	sidebar.setAttribute('aria-expanded', 'false')
  }

  /* when user clicks on list item in sidebar */
  listClick = (event, trail) => {
    const { map, infowindow, markers } = this.state;
    console.log('State:', this.state);
    console.log('Event, Trail:', event, trail);
    markers.forEach(marker => {
      if (trail.id === marker.id) {
        console.log('List item matches a marker:', trail, marker);
        // pretend someone clicked on the marker icon
        infowindow.setContent({ content: "test" });
        infowindow.open(map, marker); // this is throwing an error, but we're almost there!
      }
    });
    // force close the sidebar
    this.handleMenuClick();
  };

  /* change maxLength when user selects different maximum trail length in sidebar filter*/
  changeMaxLength = (value) => {
    // pull the desired max length from the value user selected
    let trailLength = value.target.value
    // change from string to number
    let number = parseInt(trailLength)
    // update the maxLength state
    this.setState({ maxLength: number })
    // update the currentTrails state
    let updatedTrails = this.state.currentTrails.filter(trail => {
      return trail.length <= this.state.maxLength
    })
    this.setState({ currentTrails: updatedTrails})
    // update the markers state
    this.updateMarkers()    
  }
  
  /* hide map markers that don't correspond to maxlength selected */
  updateMarkers() {
    // this function is broken, it sets markers array to 0 :(
    // filter markers to pull out markers that don't have correct trail length
    let markersToHide = this.state.markers.filter(marker => {
      return marker.length > this.state.maxLength
    })
    console.log('Markers we need to hide:', markersToHide)
    // set bad markers to invisible
    markersToHide.forEach(marker => {
      return marker.setVisible(false)
    })
    console.log('Markers supposedly set to invisible:', markersToHide)
    // exclude bad markers from current markers
    let updatedMarkers = compareArrays(this.state.markers, markersToHide)
    // update marker state
    this.setState({ markers: updatedMarkers })
    console.log('The markers were supposedly updated:', this.state.markers)   
  }

  
  

  render() {
    return (
      <main>
        <Online>
          <div id="map" aria-label="map"></div>
        </Online>
        <Offline>
          <div id="offline">
            <p id="offline-message">You are offline.</p>
            <img src={staticmap} alt="Static Map of Hiking Trails"/>
          </div>
        </Offline>
        <button id="sidebarButton" 
                autoFocus="True" 
                type="button" 
                onClick={this.handleMenuClick.bind(this)}>List View</button>
        <div id="sidebar" style={{ width: this.state.isSidebarOpen ? "100%" : 0 }} aria-expanded="false" aria-hidden="true">
          <button id="backButton" type="button" onClick={this.handleMenuClick.bind(this)}>Map View</button>
          <Info 
            trails={this.state.currentTrails.filter(trail => {return trail.length <= this.state.maxLength})}
            markers={this.state.markers}
            maxLength={this.state.maxLength}
            onChangeMaxLength={this.changeMaxLength.bind(this)}
            onListClick={this.listClick.bind(this)}
          />
        </div>
      </main>
    )
  }
}

/*
This function adds script html to index file to load the google map
*/
function loadScript(url) {
  // find the first script tag in index.html
  var index = window.document.getElementsByTagName('script')[0]
  // create a new script tag and add properties
  var script = window.document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  // put the new script tag before the first one that was found
  index.parentNode.insertBefore(script, index)
}

/* compare 2 arrays and subtract items in small array from large array */
function compareArrays(lg, sm) {
  const finalArray = []
  lg.forEach((e1) => sm.forEach((e2) => {
    if (e1 !== e2) {
      finalArray.push(e1)
    }
  }))
  return finalArray
}

export default App;

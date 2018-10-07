import React, { Component } from 'react';
import Info from './Info';
import './App.css';
import sidebar from './img/menu.svg';
import axios from 'axios';

class App extends Component {

  state = {
    trails: []
  }

  componentDidMount() {
    this.getTrails()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDAKvy5lm0G0jkaL6-OwZRqZtv9d4Cgqqw&callback=initMap")
    window.initMap = this.initMap
  }

  getTrails = () => {
    const endPoint = "https://www.hikingproject.com/data/get-trails?"
    const parameters = {
      key: '7127990-5024e929ecbd22e7834e19ea1890f393',
      lat: '35.909967',
      lon: '-79.075229',
      maxDistance: 80,
      maxResults: 10,
      sort: 'distance',  /* quality or distance */
    }

    axios.get(endPoint + new URLSearchParams(parameters))
      // first get the array of trails before rendering the map
      .then(response => {
        this.setState({
          trails: response.data.trails
        }, this.renderMap())
      })
      .catch(error => {
        console.log("Error fetching trails." + error)
      })
  }

  initMap = () => {
    // create a map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 35.909967, lng: -79.075229},
      zoom: 10
    })

    // create a generic infowindow
    var infowindow = new window.google.maps.InfoWindow({maxWidth: 300})

    // display dynamic markers
    this.state.trails.map(thisTrail => {

      // create content for infowindow
      var image = thisTrail.imgSmall
      var contentString = '<div id="content">' + 
        '<img src="' + image + '"/>' + 
        '<h3 id="trailName">' + 
        `${thisTrail.name}` +
        '</h3>' +
        '<p id="trailInfo">Length: ' +
        `${thisTrail.length}` +
        ' miles<br/> Difficulty: ' +
        `${thisTrail.difficulty}` +
        '<br/>' + 
        `${thisTrail.summary}` +
        '</p>' + 
        '</div>'

      // create marker
      var marker = new window.google.maps.Marker({
        position: {lat: thisTrail.latitude, lng: thisTrail.longitude},
        map: map,
        title: thisTrail.name
      })

      // click on marker
      marker.addListener('click', function() {
        
        // change the content of infowindow
        infowindow.setContent(contentString)
        
        // open infowindow
        infowindow.open(map, marker);
      })

      return thisTrail
    })
  }

  render() {
    return (
      <main>
        <div id="map"></div>
        <img src={sidebar} className="sidebar-icon" alt="Info" />
        <div id="sidebar"><Info
                        trails={this.state.trails} />
        </div>
      </main>
    )
  }
}

/*
This function add script html to index file to load the google map
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

/* Opens the sidebar (when the ? icon is clicked)
 
function openInfo() {
  info.style.width = "100%";
}

/* Closes the sidebar (when the X icon is clicked)

function closeInfo() {
  info.style.width = "0";
}

// this listens for click on the help ? icon
help.addEventListener('click', openNav);

// this listens for click on the X icon
closeHelp.addEventListener('click', closeNav);

*/

export default App;

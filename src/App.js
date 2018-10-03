import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  componentDidMount() {
    this.getTrails()
    this.renderMap()
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
      maxDistance: 30,
      maxResults: 10,
      sort: 'quality',  /* quality or distance */
      minLength: 0,
      minStars: 0
    }

    axios.get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log("Error: " + error)
      })
  }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 35.909967, lng: -79.075229},
      zoom: 13
    })
  }

  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    );
  }
}

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


export default App;

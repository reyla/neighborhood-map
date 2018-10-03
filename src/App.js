import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.renderMap()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDAKvy5lm0G0jkaL6-OwZRqZtv9d4Cgqqw&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
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

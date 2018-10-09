import React, { Component } from 'react';
import Info from './Info';
import './App.css';
import axios from 'axios';
import staticmap from './img/staticmap.png';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';
import img9 from './img/img9.jpg';
import img10 from './img/img10.jpg';
import img11 from './img/img11.jpg';
import img12 from './img/img12.jpg';
import img13 from './img/img13.jpg';
import img14 from './img/img14.jpg';
import img15 from './img/img15.jpg';
import img16 from './img/img16.jpg';
import img17 from './img/img17.jpg';
import img18 from './img/img18.jpg';
import img19 from './img/img19.jpg';
import img20 from './img/img20.jpg';


class App extends Component {

  state = {
    isSidebarOpen: false,
    online: true,
    maxLength: 20,
    trails: [
      {
          "name": "Battle Branch / Bolin Creek Loop",
          "summary": "Wilderness in the heart of Chapel Hill adjacent to UNC Chapel Hill Campus, with plenty of hills.",
          "difficulty": "greenBlue",
          "url": "https://www.hikingproject.com/trail/7010880/battle-branch-bolin-creek-loop",
          "imgSmall": img1,
          "length": 3.7,
          "longitude": -79.0323,
          "latitude": 35.9259
      },
      {
          "name": "Crow Branch Overlook Loop Trail",
          "summary": "Great forested singletrack trail that's very easily accessible to Chapel Hill and Carrboro.",
          "difficulty": "greenBlue",
          "url": "https://www.hikingproject.com/trail/7011748/crow-branch-overlook-loop-trail",
          "imgSmall": img2,
          "length": 4,
          "longitude": -79.0681,
          "latitude": 35.9372
      },
      {
          "name": "Johnston Mill Loop",
          "summary": "This pleasant loop is a scenic alternative for those wishing to avoid more crowded parks.",
          "difficulty": "greenBlue",
          "url": "https://www.hikingproject.com/trail/7022521/johnston-mill-loop",
          "imgSmall": img3,
          "length": 2.9,
          "longitude": -79.0541,
          "latitude": 35.9954
      },
      {
          "name": "Duke Korstian Loop",
          "summary": "A good all-weather loop.",
          "difficulty": "greenBlue",
          "url": "https://www.hikingproject.com/trail/7022400/duke-korstian-loop",
          "imgSmall": img4,
          "length": 4.2,
          "longitude": -79.0226,
          "latitude": 35.978
      },
      {
          "name": "Korstian Foot Trail Loop",
          "summary": "This loop combines several of Korstian's foot trails.",
          "difficulty": "blue",
          "url": "https://www.hikingproject.com/trail/7024716/korstian-foot-trail-loop",
          "imgSmall": img5,
          "length": 6.9,
          "longitude": -79.0225,
          "latitude": 35.9781
      },
      {
          "name": "Brumley Forest Nature Preserve Loop",
          "summary": "An extended loop trail within Brumley Forest Nature Preserve.",
          "difficulty": "greenBlue",
          "url": "https://www.hikingproject.com/trail/7042865/brumley-forest-nature-preserve-loop",
          "imgSmall": img6,
          "length": 5.8,
          "longitude": -79.0593,
          "latitude": 36.0312
      },
      {
          "name": "Al Buehler and Sally Meyerhoff Trails",
          "summary": "A very well-maintained trail circumscribing the Washington Duke golf course.",
          "difficulty": "blue",
          "url": "https://www.hikingproject.com/trail/7004485/al-buehler-and-sally-meyerhoff-trails",
          "imgSmall": img7,
          "length": 3.7,
          "longitude": -78.9523,
          "latitude": 35.9971
      },
      {
          "name": "Eno Outer Loop",
          "summary": "This longer loop visits the three highest points in the park",
          "difficulty": "blue",
          "url": "https://www.hikingproject.com/trail/7037167/eno-outer-loop",
          "imgSmall": img8,
          "length": 7.4,
          "longitude": -79.0062,
          "latitude": 36.0739
      },
      {
          "name": "New Hope Overlook - Red-Blue Trails",
          "summary": "This trail passes through woodlands to reach the Jordan Lake shoreline and loops back through woodlands.",
          "difficulty": "greenBlue",
          "url": "https://www.hikingproject.com/trail/7022705/new-hope-overlook-red-blue-trails",
          "imgSmall": img9,
          "length": 5.1,
          "longitude": -79.048,
          "latitude": 35.6825
      },
      {
          "name": "MST: West Point to Pump Station",
          "summary": "Take the Mountains-to-Sea Trail along the Eno River from West Point to the Pump Station and back.",
          "difficulty": "greenBlue",
          "url": "https://www.hikingproject.com/trail/7015858/mst-west-point-to-pump-station",
          "imgSmall": img10,
          "length": 9.3,
          "longitude": -78.9081,
          "latitude": 36.069
      },
      {
          "name": "Poe's Ridge Trail",
          "summary": "This is a 4-mile multi-use loop along Jordan Lake between the Visitor Assistance Center and Poe's Ridge boat ramp.",
          "difficulty": "blue",
          "url": "https://www.hikingproject.com/trail/7043491/poes-ridge-trail",
          "imgSmall": img11,
          "length": 3.7,
          "longitude": -79.0704,
          "latitude": 35.6548
      },
      {
          "name": "Lake Trail",
          "summary": "The Lake Trail is a great urban escape and one of the best in the Triangle area!",
          "difficulty": "blue",
          "url": "https://www.hikingproject.com/trail/7022294/lake-trail",
          "imgSmall": img12,
          "length": 6.4,
          "longitude": -78.7954,
          "latitude": 35.8421
      },
      {
          "name": "Jimmy Rogers Road Out-and-Back",
          "summary": "A section of the MST along Falls Lake. The boardwalk by Little Lick Creek Bridge is the main highlight.",
          "difficulty": "greenBlue",
          "url": "https://www.hikingproject.com/trail/7043428/jimmy-rogers-road-out-and-back",
          "imgSmall": img13,
          "length": 7.6,
          "longitude": -78.7777,
          "latitude": 36.0132
      },
      {
          "name": "Bond Park Lake Loop",
          "summary": "An easy, short loop hike around the lake on singletrack, mulched, and paved trail.",
          "difficulty": "blue",
          "url": "https://www.hikingproject.com/trail/7024662/bond-park-lake-loop",
          "imgSmall": img14,
          "length": 3,
          "longitude": -78.8293,
          "latitude": 35.7846
      },
      {
          "name": "Company Mill Trail",
          "summary": "A great get away in the heart of the triangle with some scenic hiking down on Crabtree Creek.",
          "difficulty": "blue",
          "url": "https://www.hikingproject.com/trail/7010450/company-mill-trail",
          "imgSmall": img15,
          "length": 5.1,
          "longitude": -78.7599,
          "latitude": 35.8365
      },
      {
          "name": "Turkey Creek/Cedar Ridge Loop",
          "summary": "A good rolling loop trail through established NC forest with water features.",
          "difficulty": "greenBlue",
          "url": "https://www.hikingproject.com/trail/7011687/turkey-creekcedar-ridge-loop",
          "imgSmall": img16,
          "length": 5.4,
          "longitude": -78.7251,
          "latitude": 35.843
      },
      {
          "name": "Horton Grove Nature Preserve Loop",
          "summary": "This loop combines the varied terrain of several trails to make a great longer hike.",
          "difficulty": "greenBlue",
          "url": "https://www.hikingproject.com/trail/7020965/horton-grove-nature-preserve-loop",
          "imgSmall": img17,
          "length": 6,
          "longitude": -78.8386,
          "latitude": 36.1278
      },
      {
          "name": "Rolling View Marina View Out-and-Back",
          "summary": "A pleasant section of the MST following the lake early on. The highlight is seeing Rolling View Marina coming into view.",
          "difficulty": "greenBlue",
          "url": "https://www.hikingproject.com/trail/7043936/rolling-view-marina-view-out-and-back",
          "imgSmall": img18,
          "length": 8.2,
          "longitude": -78.6891,
          "latitude": 36.0124
      },
      {
          "name": "Cedarock Park Tour",
          "summary": "This hike combines the best that Cedarock Park has to offer.",
          "difficulty": "blue",
          "url": "https://www.hikingproject.com/trail/7044858/cedarock-park-tour",
          "imgSmall": img19,
          "length": 7.1,
          "longitude": -79.4465,
          "latitude": 35.9896
      },
      {
          "name": "White Pines Loop",
          "summary": "A hike with everything: dramatic views from atop bluffs, scenic rivers, and unique ecosystems.",
          "difficulty": "greenBlue",
          "url": "https://www.hikingproject.com/trail/7013179/white-pines-loop",
          "imgSmall": img20,
          "length": 2.4,
          "longitude": -79.1607,
          "latitude": 35.6145
      }
  ]
  }

  handleMenuClick() {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen })
  }

  componentDidMount() {
    this.getTrails()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDAKvy5lm0G0jkaL6-OwZRqZtv9d4Cgqqw&callback=initMap")
    window.initMap = this.initMap
  }

  getTrails = () => {
    const endPoint = "https://www.hikingproject.com/data/get-trails"
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
          trails: response.data.trails
        }, this.renderMap())
      })
      .catch(error => {
        console.log("Error fetching trails." + error)
        this.setState({ 
          online: false 
        })
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

    // Loop over each trail in state array to load dynamic markers
    this.state.trails.map((thisTrail) => {
      // create content for infowindow
      var image = thisTrail.imgSmall
      var contentString = '<div id="popup">' + 
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
        infowindow.open(map, marker)
      })
      
      return thisTrail
    })
  }

  /* change maxLength when user selects different maximum trail length in sidebar filter*/
  changeMaxLength(value) {
    // pull the desired max length from the value user selected
    let trailLength = value.target.value
    // change from string to number
    let number = parseInt(trailLength)
    // update the state
    this.setState({ maxLength: number })
  }
    


  render() {
    return (
      <main>
        <div id="map">
          <div id="offline" style={{ visibility: this.state.online ? "hidden" : "visible" }}>
            <p id="offline-message">You are offline.</p>
            <img src={staticmap} alt="Static Map of Hiking Trails"/>
          </div>
        </div>
        <button id="sidebarButton" 
                autoFocus="True" 
                type="button" 
                onClick={this.handleMenuClick.bind(this)}>List View</button>
        <div id="sidebar" style={{ width: this.state.isSidebarOpen ? "100%" : 0 }}>
          <button id="backButton" type="button" onClick={this.handleMenuClick.bind(this)}>Map View</button>
          <Info 
            trails={this.state.trails.filter((trail) => {return trail.length <= this.state.maxLength})}
            isSidebarOpen={this.state.isSidebarOpen}
            isOnline={this.state.online}
            maxLength={this.props.maxLength}
            onChangeMaxLength={this.changeMaxLength.bind(this)}
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


export default App;

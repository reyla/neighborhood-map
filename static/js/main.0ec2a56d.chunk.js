(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,i){e.exports=i.p+"static/media/img1.55052507.jpg"},function(e,t,i){e.exports=i.p+"static/media/img2.76356885.jpg"},function(e,t,i){e.exports=i.p+"static/media/img3.f7a4a5fa.jpg"},function(e,t,i){e.exports=i.p+"static/media/img4.50039f76.jpg"},function(e,t,i){e.exports=i.p+"static/media/img5.17a814cb.jpg"},function(e,t,i){e.exports=i.p+"static/media/img6.9329071f.jpg"},function(e,t,i){e.exports=i.p+"static/media/img7.7849ee4d.jpg"},function(e,t,i){e.exports=i.p+"static/media/img8.4f75e0e3.jpg"},function(e,t,i){e.exports=i.p+"static/media/img9.ff6fc38f.jpg"},function(e,t,i){e.exports=i.p+"static/media/img10.bd147104.jpg"},function(e,t,i){e.exports=i.p+"static/media/img11.9ae1b2ae.jpg"},function(e,t,i){e.exports=i.p+"static/media/img12.e09ffec5.jpg"},function(e,t,i){e.exports=i.p+"static/media/img13.056d0efe.jpg"},function(e,t,i){e.exports=i.p+"static/media/img14.f60dab80.jpg"},function(e,t,i){e.exports=i.p+"static/media/img15.0aab35c8.jpg"},function(e,t,i){e.exports=i.p+"static/media/img16.b3b10723.jpg"},function(e,t,i){e.exports=i.p+"static/media/img17.c3e310a0.jpg"},function(e,t,i){e.exports=i.p+"static/media/img18.bf1734c9.jpg"},function(e,t,i){e.exports=i.p+"static/media/img19.f48ca89d.jpg"},function(e,t,i){e.exports=i.p+"static/media/img20.2f7f4d49.jpg"},,function(e,t,i){e.exports=i.p+"static/media/staticmap.69e44fc2.png"},function(e,t,i){e.exports=i(70)},,,,,function(e,t,i){},,,,,function(e,t,i){},,,,,,,,,,,,,,,,,,,,,function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),o=i(16),r=i.n(o),l=(i(44),i(3)),s=i(4),c=i(6),u=i(5),m=i(7),d=i(8),g=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"trail-item",onClick:function(t){e.props.onClick(t,e.props.trail)}},n.a.createElement("div",{className:"trail-img"},n.a.createElement("img",{src:this.props.trail.imgSmall,alt:this.props.trail.name})),n.a.createElement("div",{className:"trail-details"},n.a.createElement("h3",null,this.props.trail.name),n.a.createElement("p",null,"Length: ",this.props.trail.length," miles",n.a.createElement("br",null),"Difficulty: ",this.props.trail.difficulty),n.a.createElement("p",null,this.props.trail.summary),n.a.createElement(d.Online,null,n.a.createElement("div",null,n.a.createElement("a",{href:this.props.trail.url},"Learn more on HikingProject.com")))))}}]),t}(n.a.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.onChangeMaxLength;return n.a.createElement("div",{id:"content"},n.a.createElement("h3",null,"Hiking Trails Map"),n.a.createElement("p",null,"Hiking trail information is sourced from ",n.a.createElement("a",{href:"http://hikingproject.com",title:"HikingProject.com"},"HikingProject.com"),"."),n.a.createElement("p",null,"Showing ",this.props.trails.length," results for trails near Carrboro, NC."),n.a.createElement("select",{value:this.props.maxLength?this.props.maxLength:"20",onChange:function(e){t(e)}},n.a.createElement("option",{value:"selectMaxLength"},"Select max length..."),n.a.createElement("option",{value:"20"},"All Results"),n.a.createElement("option",{value:"3"},"Max 3 miles"),n.a.createElement("option",{value:"5"},"Max 5 miles"),n.a.createElement("option",{value:"7"},"Max 7 miles")),n.a.createElement("ol",{id:"trail-list-dynamic"},this.props.trails.map(function(t){return n.a.createElement("li",{key:t.id},n.a.createElement(g,{trail:t,onClick:e.props.onListClick}))})))}}]),t}(n.a.Component),h=i(17),f=i.n(h),k=i(18),w=i.n(k),y=i(19),b=i.n(y),v=i(20),E=i.n(v),S=i(21),x=i.n(S),C=i(22),L=i.n(C),j=i(23),T=i.n(j),M=i(24),B=i.n(M),O=i(25),A=i.n(O),P=i(26),N=i.n(P),R=i(27),H=i.n(R),W=i(28),I=i.n(W),D=i(29),V=i.n(D),J=i(30),U=i.n(J),q=i(31),F=i.n(q),K=i(32),G=i.n(K),z=i(33),Z=i.n(z),Q=i(34),Y=i.n(Q),$=i(35),X=i.n($),_=i(36),ee=i.n(_),te={origTrails:[{id:7010880,name:"Battle Branch / Bolin Creek Loop",summary:"Wilderness in the heart of Chapel Hill adjacent to UNC Chapel Hill Campus, with plenty of hills.",difficulty:"greenBlue",imgSmall:f.a,length:3.7,longitude:-79.0323,latitude:35.9259},{id:7011748,name:"Crow Branch Overlook Loop Trail",summary:"Great forested singletrack trail that's very easily accessible to Chapel Hill and Carrboro.",difficulty:"greenBlue",imgSmall:w.a,length:4,longitude:-79.0681,latitude:35.9372},{id:7022521,name:"Johnston Mill Loop",summary:"This pleasant loop is a scenic alternative for those wishing to avoid more crowded parks.",difficulty:"greenBlue",imgSmall:b.a,length:2.9,longitude:-79.0541,latitude:35.9954},{id:7022400,name:"Duke Korstian Loop",summary:"A good all-weather loop.",difficulty:"greenBlue",imgSmall:E.a,length:4.2,longitude:-79.0226,latitude:35.978},{id:7024716,name:"Korstian Foot Trail Loop",summary:"This loop combines several of Korstian's foot trails.",difficulty:"blue",imgSmall:x.a,length:6.9,longitude:-79.0225,latitude:35.9781},{id:7042865,name:"Brumley Forest Nature Preserve Loop",summary:"An extended loop trail within Brumley Forest Nature Preserve.",difficulty:"greenBlue",imgSmall:L.a,length:5.8,longitude:-79.0593,latitude:36.0312},{id:7004485,name:"Al Buehler and Sally Meyerhoff Trails",summary:"A very well-maintained trail circumscribing the Washington Duke golf course.",difficulty:"blue",imgSmall:T.a,length:3.7,longitude:-78.9523,latitude:35.9971},{id:7037167,name:"Eno Outer Loop",summary:"This longer loop visits the three highest points in the park",difficulty:"blue",imgSmall:B.a,length:7.4,longitude:-79.0062,latitude:36.0739},{id:7022705,name:"New Hope Overlook - Red-Blue Trails",summary:"This trail passes through woodlands to reach the Jordan Lake shoreline and loops back through woodlands.",difficulty:"greenBlue",imgSmall:A.a,length:5.1,longitude:-79.048,latitude:35.6825},{id:7015858,name:"MST: West Point to Pump Station",summary:"Take the Mountains-to-Sea Trail along the Eno River from West Point to the Pump Station and back.",difficulty:"greenBlue",imgSmall:N.a,length:9.3,longitude:-78.9081,latitude:36.069},{id:7043491,name:"Poe's Ridge Trail",summary:"This is a 4-mile multi-use loop along Jordan Lake between the Visitor Assistance Center and Poe's Ridge boat ramp.",difficulty:"blue",imgSmall:H.a,length:3.7,longitude:-79.0704,latitude:35.6548},{id:7022294,name:"Lake Trail",summary:"The Lake Trail is a great urban escape and one of the best in the Triangle area!",difficulty:"blue",imgSmall:I.a,length:6.4,longitude:-78.7954,latitude:35.8421},{id:7043428,name:"Jimmy Rogers Road Out-and-Back",summary:"A section of the MST along Falls Lake. The boardwalk by Little Lick Creek Bridge is the main highlight.",difficulty:"greenBlue",imgSmall:V.a,length:7.6,longitude:-78.7777,latitude:36.0132},{id:7024662,name:"Bond Park Lake Loop",summary:"An easy, short loop hike around the lake on singletrack, mulched, and paved trail.",difficulty:"blue",imgSmall:U.a,length:3,longitude:-78.8293,latitude:35.7846},{id:7010450,name:"Company Mill Trail",summary:"A great get away in the heart of the triangle with some scenic hiking down on Crabtree Creek.",difficulty:"blue",imgSmall:F.a,length:5.1,longitude:-78.7599,latitude:35.8365},{id:7011687,name:"Turkey Creek/Cedar Ridge Loop",summary:"A good rolling loop trail through established NC forest with water features.",difficulty:"greenBlue",imgSmall:G.a,length:5.4,longitude:-78.7251,latitude:35.843},{id:7020965,name:"Horton Grove Nature Preserve Loop",summary:"This loop combines the varied terrain of several trails to make a great longer hike.",difficulty:"greenBlue",imgSmall:Z.a,length:6,longitude:-78.8386,latitude:36.1278},{id:7043936,name:"Rolling View Marina View Out-and-Back",summary:"A pleasant section of the MST following the lake early on. The highlight is seeing Rolling View Marina coming into view.",difficulty:"greenBlue",imgSmall:Y.a,length:8.2,longitude:-78.6891,latitude:36.0124},{id:7044858,name:"Cedarock Park Tour",summary:"This hike combines the best that Cedarock Park has to offer.",difficulty:"blue",imgSmall:X.a,length:7.1,longitude:-79.4465,latitude:35.9896},{id:7013179,name:"White Pines Loop",summary:"A hike with everything: dramatic views from atop bluffs, scenic rivers, and unique ecosystems.",difficulty:"greenBlue",imgSmall:ee.a,length:2.4,longitude:-79.1607,latitude:35.6145}]},ie=(i(49),i(37)),ae=i.n(ie),ne=i(38),oe=i.n(ne);var re=function(e){function t(){var e,i;Object(l.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(i=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={isSidebarOpen:!1,maxLength:20,markers:[],map:null,infowindow:null,currentTrails:[]},i.getTrails=function(){ae.a.get("https://www.hikingproject.com/data/get-trails?"+new URLSearchParams({key:"7127990-5024e929ecbd22e7834e19ea1890f393",lat:"35.909967",lon:"-79.075229",maxDistance:100,maxResults:20,sort:"distance"})).then(function(e){i.setState({currentTrails:e.data.trails},i.renderMap())}).catch(function(e){console.log("Error fetching trails."+e),i.setState({currentTrails:te})})},i.renderMap=function(){var e,t,a;e="https://maps.googleapis.com/maps/api/js?key=AIzaSyDAKvy5lm0G0jkaL6-OwZRqZtv9d4Cgqqw&callback=initMap",t=window.document.getElementsByTagName("script")[0],(a=window.document.createElement("script")).src=e,a.async=!0,a.defer=!0,t.parentNode.insertBefore(a,t),window.initMap=i.initMap},i.initMap=function(){var e=new window.google.maps.Map(document.getElementById("map"),{center:{lat:35.909967,lng:-79.075229},zoom:10}),t=new window.google.maps.InfoWindow({maxWidth:300});i.setState({map:e,infowindow:t});var a=new window.google.maps.LatLngBounds,n=i.state.currentTrails.map(function(n){var o=i.buildInfowindowContent(n),r=new window.google.maps.Marker({position:{lat:n.latitude,lng:n.longitude},map:e,key:n.id,title:n.name,animation:window.google.maps.Animation.DROP});return a.extend(r.position),r.addListener("click",function(){t.setContent(o),e.setCenter({lat:r.latitude,lng:r.longitude}),t.open(e,r),r.setAnimation(window.google.maps.Animation.BOUNCE),setTimeout(function(){return r.setAnimation(null)},2e3)}),n});i.setState({markers:n})},i.listClick=function(e,t){var a=i.state,n=a.map,o=a.infowindow,r=a.markers;console.log("State:",i.state),console.log("Event:",e,"Trail:",t),r.forEach(function(e){if(t.id===e.id){n.setCenter({lat:e.latitude,lng:e.longitude});var a=i.buildInfowindowContent(e);o.setContent(a),o.open(n,e)}}),i.handleMenuClick()},i.changeMaxLength=function(e){var t=e.target.value,a=parseInt(t);i.setState({maxLength:a});var n=i.state.currentTrails.filter(function(e){return e.length<=i.state.maxLength});i.setState({currentTrails:n}),i.updateMarkers()},i}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getTrails()}},{key:"buildInfowindowContent",value:function(e){return'<div id="popup"><img src="'+e.imgSmall+'"/><h3 id="trailName">'+"".concat(e.name)+'</h3><p id="trailInfo">Length: '+"".concat(e.length)+" miles<br/> Difficulty: "+"".concat(e.difficulty)+'</p><p id="trailSummary">'+"".concat(e.summary)+'</p> <a href="'+"".concat(e.url)+'">Learn more on HikingProject.com</a></div>'}},{key:"handleMenuClick",value:function(){this.setState({isSidebarOpen:!this.state.isSidebarOpen});var e=document.querySelector("#sidebar");"true"===e.getAttribute("aria-hidden")?e.setAttribute("aria-hidden","false"):e.setAttribute("aria-hidden","true"),"false"===e.getAttribute("aria-expanded")?e.setAttribute("aria-expanded","true"):e.setAttribute("aria-expanded","false")}},{key:"updateMarkers",value:function(){var e=this,t=this.state.markers.filter(function(t){return t.length>e.state.maxLength});console.log("Markers we need to hide:",t),t.forEach(function(e){return e.setVisible(!1)}),console.log("Markers supposedly set to invisible:",t);var i,a,n,o=(i=this.state.markers,a=t,n=[],i.forEach(function(e){return a.forEach(function(t){e!==t&&n.push(e)})}),n);this.setState({markers:o}),console.log("The markers were supposedly updated:",this.state.markers)}},{key:"render",value:function(){var e=this;return n.a.createElement("main",null,n.a.createElement(d.Online,null,n.a.createElement("div",{id:"map","aria-label":"hiking trails map",role:"application"})),n.a.createElement(d.Offline,null,n.a.createElement("div",{id:"offline"},n.a.createElement("p",{id:"offline-message"},"You are offline."),n.a.createElement("img",{src:oe.a,alt:"Static Map of Hiking Trails"}))),n.a.createElement("button",{id:"sidebarButton",autoFocus:"True",type:"button",onClick:this.handleMenuClick.bind(this)},"List View"),n.a.createElement("div",{id:"sidebar",style:{width:this.state.isSidebarOpen?"100%":0},"aria-expanded":"false","aria-hidden":"true"},n.a.createElement("button",{id:"backButton",type:"button",onClick:this.handleMenuClick.bind(this)},"Map View"),n.a.createElement(p,{trails:this.state.currentTrails.filter(function(t){return t.length<=e.state.maxLength}),markers:this.state.markers,maxLength:this.state.maxLength,onChangeMaxLength:this.changeMaxLength.bind(this),onListClick:this.listClick.bind(this)})))}}]),t}(a.Component),le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function se(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var i=e.installing;i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(n.a.createElement(re,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/neighborhood-map",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/neighborhood-map","/service-worker.js");le?(function(e,t){fetch(e).then(function(i){404===i.status||-1===i.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):se(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):se(t,e)})}}()}],[[39,2,1]]]);
//# sourceMappingURL=main.0ec2a56d.chunk.js.map
# Project Overview

This React project uses Google maps api and REI's Hiking Project api to show nearby hiking trails.

## How To Run

You can clone this project using https://github.com/reyla/neighborhood-map.git

In your project directory, install all project dependencies with `npm install`.

Start the development server with `npm start`. It should automatically navigate your web browser to http://localhost:3000

The service worker will not work unless it is a production build.

## Dependencies

Font provided by Google Fonts https://fonts.googleapis.com/css?family=Roboto

All npm dependencies are listed in [package.json](package.json). 

## Sources

Google Maps api integration was guided by videos...

HikingProject.com api

Your Rating
  Easy: walking with no obstacles and low grades
  Easy/Intermediate
  Intermediate: 10% grade, small rocks and roots, easy scrambling
  Intermediate/Difficult
  Difficult: 15% grade, large obstacles, possible scrambling or climbing
  Extremely Difficult: 20% grade, 15+" obstacles, many harder sections


  Hiking Trails results:
  https://www.hikingproject.com/data/get-trails?lat=35.909967&lon=-79.075229&maxDistance=100&maxResults=20&sort=distance&key=KEY

  Google Static map:
  https://maps.googleapis.com/maps/api/staticmap?size=600x500&maptype=roadmap&markers=color:red%7C35.9259,-79.0323&markers=color:red%7C35.9372,-79.0681&markers=color:red%7C35.9954,-79.0541&markers=color:red%7C35.978,-79.0226&markers=color:red%7C35.9781,-79.0225&markers=color:red%7C36.0312,-79.0593&markers=color:red%7C35.9971,-78.9523&markers=color:red%7C36.0739,-79.0062&markers=color:red%7C35.6825,-79.048&markers=color:red%7C36.069,-78.9081&markers=color:red%7C35.6548,-79.0704&markers=color:red%7C35.8421,-78.7954&markers=color:red%7C36.0132,-78.7777&markers=color:red%7C35.7846,-78.8293&markers=color:red%7C35.8365,-78.7599&markers=color:red%7C35.843,-78.7251&markers=color:red%7C36.1278,-78.8386&markers=color:red%7C36.0124,-78.6891&markers=color:red%7C35.9896,-79.4465&markers=color:red%7C35.6145,-79.1607&key=

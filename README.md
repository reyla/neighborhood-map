# Project Overview

This React project uses Google maps API and REI's Hiking Project API to show hiking trails around the Triangle area in NC. 

Click on map marker icons to see more details about the trail.

Use the filter option in sidebar to show results based on maximum trail length.

## How To Run

View demo version at https://reyla.github.io/neighborhood-map/

You can clone this project using https://github.com/reyla/neighborhood-map.git

In your project directory, install all project dependencies with `npm install`.

To start the development server, use `npm start`. It should automatically navigate your web browser to http://localhost:3000

To create a production build, use `npm run build` and then `serve -s build`. If you do not have the npm server installed, you may need to type `npm install -g serve`. Navigate your web browser to http://localhost:5000.

Note: The service worker will not work unless it is a production build.

## Dependencies

React

axios https://github.com/axios/axios

react-detect-offline https://github.com/chrisbolin/react-detect-offline

See more details in [package.json](package.json). 

## Sources

Google Maps API integration and setup was guided by tutorial videos by Yahya Elharony.
https://www.youtube.com/channel/UCcWSbBe_s-T_gZRnqFbtyIA

External API data from HikingProject.com.

Font provided by Google Fonts https://fonts.googleapis.com/css?family=Roboto

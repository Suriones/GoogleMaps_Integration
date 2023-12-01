<h1 align="center">Hi there, I'm <a target="_blank">Dmytro</a> 
<img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="32"/></h1>
<h3 align="center">Frontend React developer from Ukraine</h3>

<p align="center">My project is a integration of Google maps interacting with FireBase Database.</p>

<h1><a href="https://github.com/Suriones/GoogleMaps_Integration/blob/main/package.json">Technology</a></h1>
<ul>
  <li>React, Webpack, Babel, Sass</li>
  <li>Axios, Google-Maps-API, FireBase DataBase</li>
</ul>

<h1>Launch</h1>
<ul>
<li><p>Write to console: npm install</p></li>
<li><p>Connect Google API key and database Firebase. There are comments in the code to help.</p></li>
<li><p>Last step: npm run dev</p></li>
<p><img src="https://github.com/Suriones/GoogleMaps_Integration/assets/111291999/901691d9-4462-493f-9879-500587254063"></p>
</ul>

<h1>Technical task</h1>
<ul>
  <li> Display Map (Google Maps, Mapbox of similar);</li>
  <li> When User Clicks Map: Numbered Quest Marker is placed at location on map (1,2,3, etc);</li>
  <li>Firebase Database has new record created as a sub-collection in this format:</li>
  <br>
    <p>Quest 1:</p>
    <p>Location: Lat, Long</p>
    <p>Timestamp: Time</p>
    <p>Next:</p>
    <p>/Quest 2:</p>
    <p>/Location: Lat, Long</p>
    <p>/Timestamp: Time</p>
    <p>/Next:</p>
    <p>//Quest 3:</p>
    <p>//Location: Lat, Long</p>
    <p>//Timestamp: Time</p>
  <li>Expand site to GH-pages;</li>
</ul>

<h1>Interesting details</h1>
<p>- Marker data is updated in real time according to the database.</p>
<p>- Each click on the map sends get and put requests.</p>

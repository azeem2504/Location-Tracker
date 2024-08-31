## Mapping with Leaflet.js

This application utilizes [Leaflet.js](https://leafletjs.com/) for rendering interactive maps. Leaflet is a powerful JavaScript library that allows you to create dynamic maps easily. It supports various mapping features, including markers, popups, and custom tile layers.

### Key Features of Leaflet.js Used in This Application

- **Interactive Map Display:** Users can view their location on a customizable map.
- **Real-time Location Updates:** As users share their locations, the map updates in real-time to reflect these changes.
- **Markers:** Each user's location is represented with a marker on the map, making it easy to identify their positions.
- **Custom Tile Layer:** The application uses OpenStreetMap tile layers for a clean and informative map interface.

### Getting Started with Leaflet.js

To use Leaflet.js in this application, you don't need to install it manually. It is included in the project via a CDN in the HTML files. Simply include the following lines in your HTML to utilize Leaflet features:

```html
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

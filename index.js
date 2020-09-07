const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// please follow convention of /api/ for all api routes.
// React Router will need this to function correctly
app.get('/api/ping', (req, res) => {
    res.json(true);
});

// Handles any requests that don't match the ones above
// Middleware to catch routes for React Router
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

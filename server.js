
// const bodyParser = require('body-parser');
// const path = require('path');

const port = 8080;

const express = require('express');
const app = express();
const path = require('path')
// Run the app by serving the static files
// in the dist directory
const app_path = "./dist/untitled"

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/untitled'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/untitled/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

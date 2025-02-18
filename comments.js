// Create web server
// Load the `http` module
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var comments = require('./comments');

// Create an HTTP server
var server = http.createServer(function (req, res) {
  // Get the URL
  var urlObj = url.parse(req.url, true);
  var urlPath = urlObj.pathname;
  var commentsPath = path.join(__dirname, 'comments.json');

  // Handle the URL
  if (urlPath === '/comments.json') {
    // Handle the read/write of comments.json
    if (req.method === 'GET') {
      fs.readFile(commentsPath, function (err, data)
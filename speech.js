/*
 * Socket IO server / Redis client.
 * Allows connections from HTML page and pubishes to a channel on a Redis instance.
 * 
 */

// Include require modules.
var io = require('socket.io'); 
var redis = require('redis');
var http = require('http');  
var sys = require('sys');

//Redis config settings.
var redisHost = '';
var redisPort = 0000;
var redisPass = '';
var redisChannel = 'tropo.speech';

// Create a web server for Socket IO to use.
var server = http.createServer(function(req, res){
 res.writeHead(200, {'Content-Type': 'text/html'}); 
 res.end('<h1>This is a node web server.</h1>'); 
});

// Specify the port the server should listen on.
server.listen(9000);

// Create a new socket
var socket = io.listen(server); 

socket.on('connection', function(client) {
	// A client has connected.
	sys.puts('Got a new connection!');
	
	// Create a Redis client and subscribe.
	var redisClient = redis.createClient(redisPort, redisHost); 
	redisClient.auth(redisPass);
	
	client.on('message', function(data) {
		sys.puts(data);
		redisClient.publish(redisChannel, data);
	});
	
});

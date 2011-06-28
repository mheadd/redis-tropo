Overview
========

A simple application demonstrating the power of combining Tropo, Redis, Node.js and jQuery.

Usage
=====

You'll need to following to run this example:

* A Tropo account (Create one for free or login at [Tropo.com](http://tropo.com/).
* An instance of Redis that external sources can connect to - [Redis to Go](https://redistogo.com/) is a good way to get this piece.
* A server running Node.js - this example was tested with v0.4.3.
* A web server to serve the file socket.html (the HTML + jQuery page in this solution).

You will need to modify the files "redis-tropo.php" and "speech.js" to add the settings for your Redis instance.
Create a new Tropo Scripting application and use the "redis-tropo.php" file as the source file for the application.
Launch the file "speech.js" using Node.js (by default, this server will listen on localhost port 9000, change this if needed):

	node path/to/speech.js

If you are not running your speech.js server on localhost at port 9000, you will need to modify the file "speech.html" to point to your socket.io instance.
Once your speech.js server is running, load the speech.html page in your web browser.

You should now be able to call into your Tropo application (via the Skype number auto provisioned for your app, or by adding a phone number). 
When you enter text into the web form in the speech.html file, and click "Make Tropo say this" you should hear the text spoken aloud through your phone

Feedback
========

Feedback is appreciated. Send to mheadd [at] voxeo [dot] com.

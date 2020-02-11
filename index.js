var http = require('http');

http.createServer(function (req, res) { ////create a server object:

  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
  
}).listen(process.env.NODE_PORT); //the server object listens on port 8080

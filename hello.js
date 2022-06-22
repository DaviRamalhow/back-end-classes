
const http = require('http');

http.createServer(function(req,res){

    console.log("OPA!");
    console.log(req.url);

    res.write('OPA, PASSOU PELO BACKEND!!!!');
    res.end();

}).listen(3000);




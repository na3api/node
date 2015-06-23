var http = require("http");
var url = require("url");
var querystring = require("querystring");
var formidable = require("formidable");
//error catch
process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});
function start(route, handle) {
    function onRequest(request, response) {
        var postData = {};
        var pathname = url.parse(request.url).pathname;
        request.setEncoding("utf8");

        request.addListener("data", function (postDataChunk) {

            var post = querystring.parse(postDataChunk)
            for (var i in post)
            {
                postData[i] = post[i]
            }
        });

        request.addListener("end", function () {
            route(handle, pathname, response, postData);
        });

    }


    http.createServer(onRequest).listen(8888);
    console.log("Server has started...................");
}

exports.start = start;
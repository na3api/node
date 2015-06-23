function start(r) {
    console.log("Request handler 'start' was called.");

    var body = '<html>' +
            '<head>' +
            '<meta http-equiv="Content-Type" content="text/html; ' +
            'charset=UTF-8" />' +
            '</head>' +
            '<body>' +
            '<form action="/upload" method="post">' +
            '<input name="name" rows="20" cols="60" type="text">' +
            '<textarea name="text" rows="20" cols="60"></textarea>' +
            '<input type="submit" value="Submit text" />' +
            '</form>' +
            '</body>' +
            '</html>';

}

function upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    console.log(postData);
    response.end();
}

exports.start = start;
exports.upload = upload;



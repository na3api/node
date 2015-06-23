function news(response, postData)
{
    console.log("Request handler 'news' was called.");

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

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
exports.news = news;
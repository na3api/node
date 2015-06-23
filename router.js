function route(handle, pathname, response, postData) {
    console.log("About to route a request for " + pathname);
    var page;
        console.log(pathname);
    if (page = require("." + pathname) && pathname !== '/')
    {
        var url = pathname.split("/");
        if(url != '')
        {
            var body = page[url[1]][url[2]]();
        }else{
            var body = page[url[1]]();
            
        }    
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(body);
        response.end();

    }else if(pathname === '/'){
        var page = require("./index")
        var info = page.index();
        response.writeHead(200, {"Content-Type": "text/html"});
        if(info)
            response.write(info);
        
        response.end();
    } 
    else {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}
function view()
{
    
}
exports.route = route;
exports.route = view;
'use strict';

let http = require('http');
let urlutils = require('url');

class Server {
    constructor(http, urlutils) {
        this._http = http;
        this._urlutils = urlutils;
        this._responseText = '';
    }

    set responseText(value) {
        this._responseText = value;
    }

    get responseText() {
        return this._responseText;
    }

    run(port = 8888) {
        this._http.createServer(this._onRequest.bind(this)).listen(port);
        return this;
    }

    _onRequest(request, response) {
        let params = this._urlutils.parse(request.url);
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write(this._responseText);
        response.end();
    }
}

module.exports = new Server(http, urlutils);

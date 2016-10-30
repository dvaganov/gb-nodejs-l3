'use strict';

const mvc = require('mvc');

let app = new mvc.Application({
    'baseDir': __dirname
});

app.routes = {
    '/': {controller: 'site', action: 'index'},
    '/news': {controller: 'news', action: 'index'},
    '/translate': {controller: 'translate', action: 'index'}
};

app.run(8888);


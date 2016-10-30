'use strict'

const mvc = require('mvc');

class SiteController extends mvc.Controller {
    actionIndex() {
        this.app.render('index');
    }

    actionError() {
        this.app.statusCode = 404;
        this.app.body = 'Error 404: Page is not found. Try something else.';
        this.app.send();
    }
}

module.exports = SiteController;

'use strict'

const mvc = require('mvc');

class SiteController extends mvc.Controller {
    actionIndex() {
        this.app.render('index');
    }

    actionError() {
        this._app.statusCode = 404;
        this._app.body = 'Error 404: Page is not found. Try something else.';
        this._app.send();
    }
}

module.exports = SiteController;

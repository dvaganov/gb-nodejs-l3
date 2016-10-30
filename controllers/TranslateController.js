'use strict'

const mvc = require('mvc');
const request = require('request');

class TranslateController extends mvc.Controller {
    actionIndex() {
        let key = 'trnsl.1.1.20161030T120809Z.6247b58e6f8de11c.29dd0854f9728b6e5fa77120ad1fee91cbfa73e8';
        let url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&lang=en-ru&text=${this.query.text}`;

        if (this.query.text) {
            request(url, (err, response, result) => {
                if (err)
                    throw err;

                let data = {
                    originalText: this.query.text,
                    translatedText: JSON.parse(result).text[0]
                };

                this.app.render('translate', data);
            });
        } else {
            this.app.render('translate');
        }
    }
}

module.exports = TranslateController;

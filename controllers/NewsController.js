'use strict'

const request = require('request');
const mvc = require('mvc')

const News = require('../models/news.js')

class NewsController extends mvc.Controller {
    constructor() {
        super();
        this.news = new News();
    }

    actionIndex() {
        request('http://www.rbc.ru/', (err, res, html) => {
            if (err)
                throw err;

            this.news.parse(html);

            let data = {
                categories: this.news.listCategories(),
                category: (this.query.category || ''),
                titles: []
            };

            try {
                data.titles = this.news.getTitles(data.category);
            } catch (err) {
                console.log(err.toString());
            }

            this.app.render('news', data);
        });
    }
}

module.exports = NewsController;

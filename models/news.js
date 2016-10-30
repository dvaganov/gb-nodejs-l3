'use strict'

const cheerio = require('cheerio');

class News {
    constructor() {
        this.titles = {};
    }

    listCategories() {
        return Object.keys(this.titles);
    }

    getTitles(category) {
        if (!this.titles[category]) {
            throw new Error('Category is not found.');
        }

        return this.titles[category];
    }

    parse(html) {
        let $ = cheerio.load(html);

        $('.news-feed__item__text').each((i, elem) => {
            let category = $(elem).children('.news-feed__item__date').text().split(',')[0].trim();
            let title = $(elem).children('.news-feed__item__title').text().trim();

            if (!Array.isArray(this.titles[category])) {
                this.titles[category] = [];
            }

            this.titles[category].push(title);
        });
    }
}

module.exports = News;

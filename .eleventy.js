const fs = require('fs');
const path = require('path');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addWatchTarget('./src/css/');
    eleventyConfig.addPassthroughCopy('./src/scripts');
    eleventyConfig.addWatchTarget('./src/scripts');

    const env = process.env.ELEVENTY_ENV || 'development';
    eleventyConfig.addGlobalData('env', env);

    if (env == 'development') {
    }
    if (env == 'staging') {
    }

    if (env == 'production') {
    }

    eleventyConfig.addCollection('thoughts', function (collectionsApi) {
        const items = collectionsApi.getFilteredByTag('thought');
        console.log('All markdown files');
        collectionsApi
            .getAll()
            .forEach((file) => console.log(file.inputPath, file.data.tags));
        console.log('Thoughts: ', items.length);
        return items;
    });

    eleventyConfig.addCollection('explorations', function (collectionsApi) {
        const items = collectionsApi.getFilteredByTag('exploration');
        console.log('Explorations: ', items.length);
        return items;
    });


    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: 'output',
        },
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
    };
};

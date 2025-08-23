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
        console.log('Thoughts: ', items.length);
        return items;
    });

    eleventyConfig.addCollection('explorations', function (collectionsApi) {
        const items = collectionsApi.getFilteredByTag('exploration');
        console.log('Explorations: ', items.length);
        return items;
    });

    eleventyConfig.addCollection('explorationsLogs', function (collectionsApi) {
        const logs = collectionsApi.getFilteredByGlob('src/posts/*-logs/*.md');

        let grouped = {};
        logs.forEach((log) => {
            const parentSlug = log.filePathStem
                .split('/')
                .slice(-2)[0]
                .replace('-logs', '');

            if (!grouped[parentSlug]) {
                grouped[parentSlug] = [];
            }
            grouped[parentSlug].push(log);
        });

        return grouped;
    });

    eleventyConfig.addCollection(
        'explorationsWithLogs',
        function (collectionsApi) {
            const explorations = collectionsApi.getFilteredByTag('exploration');
            const logsByParent = collectionsApi
                .getFilteredByGlob('src/posts/*-logs/*.md')
                .reduce((acc, log) => {
                    const parentSlug = log.filePathStem
                        .split('/')
                        .slice(-1)[0]
                        .replace('-logs', '');
                    if (!acc[parentSlug]) {
                        acc[parentSlug] = [];
                    }
                    acc[parentSlug].push(log);
                    return acc;
                }, {});
            return explorations.map((exp) => {
                const slug = exp.fileSlug;
                return {
                    ...exp,
                    logs: logsByParent[slug] || [],
                };
            });
        }
    );

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

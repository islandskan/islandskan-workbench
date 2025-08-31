const util = require('util');
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addWatchTarget('./src/css/');
    eleventyConfig.addPassthroughCopy('./src/scripts');
    eleventyConfig.addWatchTarget('./src/scripts');

    eleventyConfig.addFilter('toStringDate', function (date) {
        if (!date) {
            return '';
        }
        return date.toISOString().split('T')[0];
    });

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
        // collectionsApi.getAll().forEach((item) => {
        //     if (item.inputPath.includes('2025-08-31')) {
        //         console.log('DEBUGGING TEST LOG ENTRY');
        //         console.log('InputPath:', item.inputPath);
        //         console.log('Data keys:', Object.keys(item.data));
        //         console.log('Tags:', item.data.tags);
        //         console.log('Debug marker: ', item.data.debugMarker);
        //     }
        // });

        return items;
    });

    // eleventyConfig.on('eleventy.after', ({ dir }) => {
    //     console.log('=== DEBUG DATA FILES ===');
    //     const fs = require('fs');
    //     const path = require('path');

    //     const dataPath = path.join(
    //         __dirname,
    //         'src/posts/test-logs/2025-08-31.md'
    //     );
    //     console.log('Exists?', fs.existsSync(dataPath));
    //     console.log('Contents:', fs.readFileSync(dataPath, 'utf8'));
    // });

    eleventyConfig.addFilter('dump', (obj) => {
        return util.inspect(obj);
    });

    eleventyConfig.addCollection('explorationLogs', function (collectionsApi) {
        const logs = collectionsApi.getFilteredByTag('logs');
        return logs;
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

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addWatchTarget('./src/css/');
    eleventyConfig.addPassthroughCopy('./src/scripts');
    eleventyConfig.addWatchTarget('./src/scripts');
    const env = process.env.ELEVENTY_ENV || 'development';
    eleventyConfig.addGlobalData('env', env);

    if (env == 'development') {
    }

    if (env == 'production') {
    }

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

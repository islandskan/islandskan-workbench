// const util = require('util');
module.exports = async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addWatchTarget('./src/css/');
    eleventyConfig.addPassthroughCopy('./src/scripts');
    eleventyConfig.addWatchTarget('./src/scripts');
    eleventyConfig.addPassthroughCopy({ './src/assets': 'assets' });
    eleventyConfig.addWatchTarget('./src/assets');

    const { default: interlinker } = await import(
        '@photogabble/eleventy-plugin-interlinker'
    );

    eleventyConfig.addPlugin(interlinker, {
        embedLayoutLanguage: 'liquid',
        defaultLayout: 'layouts/embed.liquid',
        embedLayout: 'layouts/bookmark-embed.liquid',
        deadLinkReport: 'console',
    });

    const env = process.env.ELEVENTY_ENV || 'development';
    eleventyConfig.addGlobalData('env', env);

    eleventyConfig.addFilter('toStringDate', function (date) {
        if (!date) {
            return '';
        }
        return date.toISOString().split('T')[0];
    });

    eleventyConfig.addCollection('thoughts', function (collectionsApi) {
        const items = collectionsApi.getFilteredByTag('thought');
        return items;
    });

    eleventyConfig.addCollection('explorations', function (collectionsApi) {
        const rawFiles = collectionsApi.getAll();
        const parents = collectionsApi.getFilteredByTag('exploration');
        return parents.map((parent) => {
            const parentId = parent.page.fileSlug;
            const children = rawFiles.filter(
                (child) =>
                    child.inputPath.startsWith(`./src/posts/${parentId}`) &&
                    child.data.parent === parentId &&
                    child.data.permalink === false
            );
            const childTags = children.flatMap(
                (child) => child.data.tags || []
            );
            const uniqueChildTags = [
                ...new Set(
                    childTags.filter(
                        (tag) =>
                            tag !== 'logs' &&
                            tag !== 'what-i-broke' &&
                            tag !== 'resolved' &&
                            tag !== 'solved'
                    )
                ),
            ];
            parent.data.tags = [
                ...new Set([...(parent.data.tags || []), ...uniqueChildTags]),
            ];
            children.sort((a, b) => {
                const diff = b.data.date - a.data.date;
                if (diff !== 0) {
                    return diff;
                }
                return b.inputPath.localeCompare(a.inputPath);
            });
            if (children.length > 0) {
                const newestChild = children[0];
                parent.data.status =
                    newestChild.data.status || parent.data.status;
                parent.data.latestUpdate =
                    newestChild.data.date || parent.data.latestUpdate;
                parent.data.hasWhatIBroke =
                    newestChild.data.tags &&
                    newestChild.data.tags.includes('what-i-broke');
            }
            parent.data.logEntries = children;

            return parent;
        });
    });

    eleventyConfig.addFilter('push', function (array, item) {
        if (!Array.isArray(array)) {
            array = [];
        }

        return array.concat([item]);
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

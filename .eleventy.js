// const util = require('util');
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addWatchTarget('./src/css/');
    eleventyConfig.addPassthroughCopy('./src/scripts');
    eleventyConfig.addWatchTarget('./src/scripts');

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
        const items = collectionsApi.getFilteredByTag('exploration');
        return items;
    });

    eleventyConfig.addCollection('explorationLogs', function (collectionsApi) {
        const logs = collectionsApi.getFilteredByTag('logs');
        return logs;
    });

    eleventyConfig.addFilter('push', function (array, item) {
        if (!Array.isArray(array)) {
            array = [];
        }

        return array.concat([item]);
    });

    eleventyConfig.addCollection(
        'explorationsWithLogs',
        function (collectionsApi) {
            const explorations = collectionsApi.getFilteredByTag('exploration');
            const logs = collectionsApi.getFilteredByTag('logs');

            const getTags = (tag) =>
                Array.isArray(tag) ? tag : tag ? [tag] : [];

            const validateTime = (date) => {
                const time = new Date(date).getTime();
                return Number.isNaN(time) ? 0 : time;
            };

            explorations.forEach((exploration) => {
                const slug = exploration.data.slug;

                if (!slug) {
                    console.warn(
                        `Exploration "${exploration.inputPath} is missing a slug in frontmatter! Logs may not link correctly D:`
                    );
                }

                const relatedLogs = logs.filter(
                    (log) => log.data.parent === slug
                );

                console.log(
                    `🔍 Exploration: ${slug} has ${relatedLogs.length} logs ->`,
                    relatedLogs.map((l) => l.data.title)
                );

                relatedLogs.sort(
                    (a, b) =>
                        validateTime(b.data.date) - validateTime(a.data.date)
                );

                exploration.data.relatedLogs = relatedLogs;

                exploration.data.latestUpdate =
                    relatedLogs[0]?.data.date || exploration.data.startDate;

                exploration.data.status =
                    relatedLogs[0]?.data.status || exploration.data.status;

                const allTags = new Set([
                    ...getTags(exploration.data.tags),
                    ...relatedLogs.flatMap((log) => getTags(log.data.tags)),
                ]);
                exploration.data.tags = Array.from(allTags);

                exploration.data.hasWhatIBroke = relatedLogs.some((log) =>
                    getTags(log.data.tags).includes('what-i-broke')
                );
            });

            return explorations.sort(
                (a, b) =>
                    validateTime(b.data.latestUpdate) -
                    validateTime(a.data.latestUpdate)
            );
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

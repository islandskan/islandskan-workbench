const fs = require('fs');
const path = require('path');

function createLogsFolder(postFilePath) {
    if (!fs.existsSync(postFilePath)) {
        console.error(`Post file doesn't exist: ${postFilePath}`);
        return;
    }
    const dir = path.dirname(postFilePath);
    const fileName = path.basename(postFilePath, '.md');
    const logFolder = path.join(dir, `${fileName}-logs`);
    if (!fs.existsSync(logFolder)) {
        fs.mkdirSync(logFolder);
        console.log(`Created ${logFolder}`);
    } else {
        console.log(`${logFolder} already exists.`);
    }
}

if (require.main == module) {
    const postPath = process.argv[2];
    if (!postPath) {
        console.error('Provide the path to the post markdown file');
        process.exit(1);
    }
    createLogsFolder(postPath);
}

module.exports = createLogsFolder;

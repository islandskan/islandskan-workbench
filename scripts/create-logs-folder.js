const fs = require('fs');
const path = require('path');

// function getTimeStamp() {
//     const now = new Date();
//     const year = now.getFullYear();
//     const month = String(now.getMonth() + 1).padStart(2, '0');
//     const day = String(now.getDate()).padStart(2, '0');
//     const hour = String(now.getHours()).padStart(2, '0');
//     const minute = String(now.getMinutes()).padStart(2, '0');
//     const second = String(now.getSeconds()).padStart(2, '0');
//     return `${year}-${month}-${day}-${hour}-${minute}-${second}`;
// }

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

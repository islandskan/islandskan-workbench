const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const chokidar = require('chokidar');
const createLogsFolder = require('./create-logs-folder');

const postsDir = path.join(__dirname, '../src/posts');

function hasExplorationTag(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const frontMatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---/);
        if (!frontMatterMatch) {
            return false;
        }
        const frontMatter = yaml.load(frontMatterMatch[1]);
        return frontMatter?.tags?.includes('exploration');
    } catch (err) {
        console.error(`Error reading ${filePath}: `, err);
        return false;
    }
}

function removeUntitledLogs() {
    const untitledLogs = path.join(postsDir, 'untitled-logs');
    if (fs.existsSync(untitledLogs)) {
        fs.rmSync(untitledLogs, { recursive: true, force: true });
        console.log(`Removed leftover ${untitledLogs}`);
    }
}

const watcher = chokidar.watch(`${postsDir}/*.md`, {
    ignoreInitial: true,
    persistent: true,
});
watcher.on('add', (filePath) => {
    const fileName = path.basename(filePath);

    if (fileName.toLowerCase().startsWith('untitled')) {
        return;
    }

    console.log(`New file detected: ${filePath}`);

    setTimeout(() => {
        removeUntitledLogs();
        if (hasExplorationTag(filePath)) {
            console.log('Exploration post detected!');
            createLogsFolder(filePath);
        } else {
            console.log('Not an Exploration post, skipping');
        }
    }, 500);
});

console.log(`Watching ${postsDir} for new Exploration post...`);

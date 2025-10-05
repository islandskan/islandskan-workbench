const bookshelf = require('./bookshelf.json');

module.exports = () => {
    if (!Array.isArray(bookshelf) || bookshelf.length == 0) {
        return null;
    }

    const sortedBookshelf = bookshelf.sort((a, b) => {
        const diff = new Date(b.dateAdded) - new Date(a.dateAdded);
        if (diff !== 0) {
            return diff;
        }
        return b.itemId - a.itemId;
    });

    return sortedBookshelf[0];
};

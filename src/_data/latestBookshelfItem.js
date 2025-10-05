const bookshelf = require('./bookshelf.json');

module.exports = () => {
    if (!Array.isArray(bookshelf) || bookshelf.length == 0) {
        return null;
    }

    const sortedBookshelf = bookshelf.sort(
        (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
    );

    return sortedBookshelf[0];
};

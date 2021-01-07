let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return title + " by " + author + ", " + pages + " pages, " + read;
    }
}

function addBookToLibrary(newBook) {
    // if (myLibrary.some(bookInLib => bookInLib.title !== newBook.title)) {
        myLibrary.push(newBook);
    // }
  }

function displayBooks() {
    const body = document.querySelector('body');
    const libraryTable = document.createElement('table');
    const headerRow = document.createElement('tr');
    const thTitle = document.createElement('th');
    const thAuthor = document.createElement('th');
    const thPages = document.createElement('th');
    const thRead = document.createElement('th');

    libraryTable.setAttribute('id', 'library');
    thTitle.textContent = "Title";
    thAuthor.textContent = "Author";
    thPages.textContent = "Pages";
    thRead.textContent = "Read";

    
    headerRow.appendChild(thTitle);
    headerRow.appendChild(thAuthor);
    headerRow.appendChild(thPages);
    headerRow.appendChild(thRead);
    libraryTable.appendChild(headerRow);

    for (book of myLibrary) {
        const nextRow = document.createElement('tr');
        const title = document.createElement('td');
        const author = document.createElement('td');
        const pages = document.createElement('td');
        const read = document.createElement('td');

        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        read.textContent = book.read;

        nextRow.appendChild(title);
        nextRow.appendChild(author);
        nextRow.appendChild(pages);
        nextRow.appendChild(read);
        libraryTable.appendChild(nextRow);
    }
    body.appendChild(libraryTable);
}

const newBook = document.querySelector("#new-book");
newBook.addEventListener('click', () => {
    const newBookForm = document.createElement("form");
    newBookForm.setAttribute('id', 'new-book-form');

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = "Title:";

    const titleInput = document.createElement("input");
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('name', 'title');

    const authorLabel = document.createElement("label");
    authorLabel.setAttribute('for', 'author');
    authorLabel.textContent = "Author:";

    const authorInput = document.createElement("input");
    authorInput.setAttribute('type', 'text');
    authorInput.setAttribute('id', 'author');
    authorInput.setAttribute('name', 'author');

    const pagesLabel = document.createElement("label");
    pagesLabel.setAttribute('for', 'pages');
    pagesLabel.textContent = "Pages:";

    const pagesInput = document.createElement("input");
    pagesInput.setAttribute('type', 'text');
    pagesInput.setAttribute('id', 'pages');
    pagesInput.setAttribute('name', 'pages');

    const readLabel = document.createElement("label");
    readLabel.setAttribute('for', 'read');
    readLabel.textContent = "Read:";

    const readInput = document.createElement("input");
    readInput.setAttribute('type', 'text');
    readInput.setAttribute('id', 'read');
    readInput.setAttribute('name', 'read');

    newBookForm.appendChild(titleLabel);
    newBookForm.appendChild(titleInput);
    newBookForm.appendChild(authorLabel);
    newBookForm.appendChild(authorInput);
    newBookForm.appendChild(pagesLabel);
    newBookForm.appendChild(pagesInput);
    newBookForm.appendChild(readLabel);
    newBookForm.appendChild(readInput);

    document.querySelector("body").appendChild(newBookForm);
    newBook.setAttribute('disabled', '');
});

// const book1 = new Book("test1", "author1", 234, "y");
// addBookToLibrary(book1);
displayBooks();
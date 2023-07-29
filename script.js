let library = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = hasRead;
}

const createBook = () => {
    const form = document.querySelector("form");
    const title = form.elements["title"].value;
    const author = form.elements["author"].value;
    const pages = form.elements["pages"].value;
    const hasRead = form.elements["hasRead"].checked ? "Yes": "No";

    const newBook = new Book(title, author, pages, hasRead);
    addBookToLibrary(newBook);
}

const addBookToLibrary = (book) => {
    library.push(book);
    console.log("Book Added to Library");
    displayLibrary();
}

const init = () => {
    const button = document.querySelector("button");
    button.addEventListener("click", (e) => {
        e.preventDefault();
        createBook();
    })
}

const displayLibrary = () => {
    const bookContainer = document.querySelector('.book-container');
    bookContainer.innerHTML = '';
    library.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.className = "book"
        const author = document.createElement('h3');
        const title = document.createElement('h1');
        const pages = document.createElement('h3');
        const read = document.createElement('h3');

        author.textContent = "Author: " + book.author;
        title.textContent = "Title: " + book.title;
        pages.textContent = "Pages: " + book.pages;
        read.textContent = "Has Read: " + book.read;
        bookCard.style.cssText = "border: 1px solid red; width: 500px; height: 500px";

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(read);
        

        bookContainer.appendChild(bookCard);
    })

    console.log("Displayed");

}

init();
displayLibrary();
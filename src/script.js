let webTable = document.querySelector("#table");
let webTableBtns = document.querySelector("#table-buttons");

let addBookBtn = document.getElementById("add-book");
let delBookBtn = document.getElementById("remove-book");

/* let row = tableDiv.classList.add('row');
let colsm = tableDiv.classList.add('col-sm'); */

let myLibrary = []; //original spec of project - aiming to do this with hashmap instead
let libraryMap = new Map();

function Book(title, author, pages, genre, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.isRead = isRead;
}

let book1 = new Book("J.R.R Tolkien", "The Hobbit", 366, "Fantasy", true);



function addBooktoLibrary() { //takes user input and creates a new Book object with it, then places on the table
    
}

function displayLibraryTable() { //displays library table - may scrap - early versions of program will not have this and this will be developed late
    
}


function addTableRow(Book) {
    let tableBook = Book;
    let rowDiv = document.createElement('div');
    let attribute = [tableBook.title, tableBook.author, tableBook.pages, tableBook.genre, tableBook.isRead];
    let numCols = attribute.length;
    
    rowDiv.classList.add("row");
    
    for(let i = 0; i < numCols; i++){
        let colDiv = document.createElement('div');
        colDiv.classList.add("col-sm");


        colDiv.textContent = attribute[i];
        rowDiv.appendChild(colDiv);
    }
    
    webTable.appendChild(rowDiv);

}

addTableRow(book1);

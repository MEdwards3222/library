let webTable = document.querySelector("#table");
let webTableBtns = document.querySelector("#table-buttons");

let addBookBtn = document.getElementById("add-book");
let delBookBtn = document.getElementById("remove-book");

/* let row = tableDiv.classList.add('row');
let colsm = tableDiv.classList.add('col-sm'); */

let myLibrary = []; //original spec of project - aiming to do this with hashmap instead
let libraryMap = new Map();

function Book(author, title, pages, genre, isRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.genre = genre;
    this.isRead = isRead;
}

let book1 = new Book("J.R.R Tolkien", "The Hobbit", 366, "Fantasy", true);



function addBooktoLibrary() { //takes user input and creates a new Book object with it, then places on the table
    
}

function displayLibraryTable() { //displays library table - may scrap - early versions of program will not have this and this will be developed late
    
}

function addTableRow() {
    let rowDiv = document.createElement('div');
    let numCols = 3;
    
    rowDiv.classList.add("row");
    
    for(let i = 0; i < numCols; i++){
        let colDiv = document.createElement('div');
        colDiv.classList.add("col-sm");
        colDiv.textContent = "Test";
        rowDiv.appendChild(colDiv);
    }
    
    webTable.appendChild(rowDiv);

}

addTableRow();

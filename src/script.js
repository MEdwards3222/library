let webTable = document.querySelector("#table");
let webTableBtns = document.querySelector("#table-buttons");

let addBookBtn = document.getElementById("add-book");
let delBookBtn = document.getElementById("remove-book");
let submitBookBtn = document.getElementById("book-submit");


let myLibrary = []; //original spec of project - aiming to do this with hashmap instead
let libraryMap = new Map();

function Book(title, author, pages, genre, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.isRead = isRead;
}

let book1 = new Book("The Hobbit", "J.R.R Tolkien", 366, "Fantasy", true);

libraryMap.set(book1.title, book1);




function mapIterator(map) {
    let libMap = map;

    if (map == undefined) {
        console.log("mapIterator error!");
        return;
    }

    
    let bookIt = map.values();
    
    let iterator = bookIt[Symbol.iterator]();
    
    let result = iterator.next();
    
    while (!result.done) {
      let book = result.value;
      console.log(book);
      addTableRow(book);
      result = iterator.next();
    }

}

function addBooktoLibrary() { //takes user input and creates a new Book object with it, then places on the table

    let formTitle = document.getElementById("book-title");
    let formAuthor = document.getElementById("book-author");
    let formPages = document.getElementById("book-pages");
    let formGenre = document.getElementById("book-genre");
    let formRead = document.getElementById("book-read");
    let boolRead = false;

    if(formRead.checked) {
        boolRead = true;
    }

    let formBook = new Book(formTitle.value, formAuthor.value, formPages.value, formGenre.value, boolRead);
    libraryMap.set(formBook.title, formBook);
    
    removeTable();
    mapIterator(libraryMap);
    console.log(event.target);
    
    //disable default behavior
    Event.preventDefault;
}


function addTableRow(Book) {
    let tableBook = Book;
    let rowDiv = document.createElement('div');
    let removeBtnDiv = document.createElement('div');
    let attribute = [tableBook.title, tableBook.author, tableBook.pages, tableBook.genre, tableBook.isRead];
    let numCols = attribute.length;
    
    rowDiv.classList.add("row");
    
    
    for(let i = 0; i < numCols; i++){
        let colDiv = document.createElement('div');
        colDiv.classList.add("col-sm");


        colDiv.textContent = attribute[i];
        rowDiv.appendChild(colDiv);
    }

    removeBtnDiv.classList.add("col-sm");
    removeBtnDiv.innerHTML = `<button id="trashBtn-${tableBook.title}"><i class="fa-solid fa-trash"></i></button>`
    rowDiv.appendChild(removeBtnDiv);
    
    webTable.appendChild(rowDiv);

    let trashBtn = document.getElementById(`trashBtn-${tableBook.title}`);
    trashBtn.addEventListener("click", () => removeBook());

}

function removeTable() {
    let htmlArr = webTable.getElementsByClassName("row");
    console.log("child elements: " + htmlArr.length);

    for(let obj in htmlArr){
        console.log(htmlArr.item(obj));
    }
    
    if(htmlArr.length < 1) {
        return;
    }

    for(let i = htmlArr.length -1; i > 0; i--){
        console.log("removing "+ htmlArr.item(i));
        htmlArr[i].parentNode.removeChild(htmlArr[i]);
    }
    
}

function removeBook() {
    let reqTitle = event.target.parentNode.parentNode.parentNode.firstChild.innerHTML; //lol
    libraryMap.delete(reqTitle);

    removeTable();
    mapIterator(libraryMap);
    console.log(reqTitle);

    if(reqTitle == undefined){
        //This is a strange bug...consider asking Odin Discord about it. For now - this is a band-aid solution
        console.log("Hit undefined!!");
        console.log(event.target.parentNode.parentNode.firstChild.innerHTML);

        reqTitle = event.target.parentNode.parentNode.firstChild.innerHTML;

        libraryMap.delete(reqTitle);

        removeTable();
        mapIterator(libraryMap);
    }
}

mapIterator(libraryMap); //Generate initial table/example entry


submitBookBtn.addEventListener("click", () => addBooktoLibrary());



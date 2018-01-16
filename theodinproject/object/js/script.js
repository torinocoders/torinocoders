let myLibrary = [];
//costruttore con parametri
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function(){
    return this.title+', '+this.author+', '+this.pages+', '+this.read;
  }
};
//costruttore senza parametri
function emptyBook() {

  this.title = '';
  this.author = '';
  this.read = true;
  this.info = function(){
    return this.title+', '+this.author+', '+this.pages+', '+this.read;
  }
  this.createId = function(){
    for (var i = 0; i < myLibrary.length; i++) {
      if(myLibrary[i].id == undefined ||
         myLibrary[i].id == '' ||
         myLibrary[i].id == null
        ){
           this.id = 0;
         }else {
           if(myLibrary[i].id > this.id ){
             this.id = myLibrary[i].id;
           }
         }
    }
    this.id += 1;
    return this.id;
  }
  this.id = this.createId();
};

function createNewBook() {
  var form = document.getElementById("addBook");
  var i;
  var fields = form.getElementsByTagName("input");
  var data = [];
  var b = new emptyBook();
  for(i = 0; i < fields.length; i++){
    if(fields[i].type == 'text' || (fields[i].type == 'radio' && fields[i].checked)){
      //data.push(fields[i].value);
      b[fields[i].name] = fields[i].value;
    }
  }
  console.log(b)
  addBookToLibrary(b);
  return b;
};
function addBookToLibrary(book) {
  myLibrary.push(book);
};
function render(){
  var el = document.querySelector("tbody");
  el.innerHTML = "";
  var newRow = null;
  for(var i = 0; i < myLibrary.length; i++){
    newRow = document.createElement("tr");
    newRow.innerHTML ='<td>'+myLibrary[i].title+'</td><td>'+myLibrary[i].author+'</td><td>'+myLibrary[i].pages+'</td><td>'+myLibrary[i].read+'</td>';
    el.appendChild(newRow);
  }
}

window.onload = function(){
  var libro1 = new Book('libro1', 'stoca',122, 'yes');
  //console.log(libro1.info());
  var libro2 = new Book('Il Corsaro Nero', 'Emilio Salgari',387, 'no');
  addBookToLibrary(libro1);
  addBookToLibrary(libro2);  //addBookToLibrary(libro2);
  //render();
};

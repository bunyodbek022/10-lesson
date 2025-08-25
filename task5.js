// Function 
function create(books){
  let obj = {
    title : prompt("Kitobni nomi: "),
    author: prompt("Author:"),
    read : (prompt("O'qiganmisiz: ").toLocaleLowerCase() === "ha")
  }
  books.add(obj)
}
function findOne(name){
  let check = false
  for(let obj1 of books){
    if(obj1.title === name){
       check = true
    }
  }
  return check;
}

function findAll(){
  console.log(books);
}

function filterByAuthor(authorName){
  let arr = []
  for(let obj1 of books){
    if(obj1.author === authorName){
       arr.push(obj1)
    }
  }
  return arr;
}

function filterByreaded(){
  books.forEach(obj => {
    if(obj.read) {
      console.log(obj)
    }
   });
}

function deleteOne(id){
  let count = 0
  for(let obj of books){
    count++
    if(count == 3){
      return obj
    }
  }
}

function deleteMany(){
  books.clear()
}
// Amallar
// -------------------------------------------------------
let books = new Set([
  {title : "The Hobbit",
    author: "J.R.R. Tolkien",
    read: false
  }]
);
//_1------------------------
let add = confirm("Yangi kitoni royxatga qoshmoqchimisiz?")
if(add){
  create(books)
}
//_2-------------------------

console.log(findOne(prompt("Qaysi kitobni qidiryapsiz?")))

//_3-------------------------

findAll()

//_4-------------------------

console.log(filterByAuthor(prompt("Author ismini yozing")))

//_5-------------------------

filterByreaded()

//_6-------------------------

deleteOne(+prompt("qaysi id dagi kitob o'chirish kerak"))

//_7------------------------

deleteMany()

console.log(books)
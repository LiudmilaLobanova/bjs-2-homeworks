class PrintEditionItem {
  constructor(name, releaseDate, pagesCount){
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
    }

  fix() {
  this.state = this.state * 1.5;
  }

  set state(newState){
    if (newState < 0) {
    this._state = 0;
    } else if (newState > 100) {
    this._state = 100;
    } else {
    this._state = newState;
    }
  }

  get state() {
  return this._state
  }

}

const sherlock = new PrintEditionItem(
"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
2019,1008);

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pageCount) {
    super(name, releaseDate, pageCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(name, releaseDate, pageCount, author) {
    super(name, releaseDate, pageCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(name, releaseDate, pageCount, author) {
    super(name, releaseDate, pageCount, author);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(name, releaseDate, pageCount, author) {
    super(name, releaseDate, pageCount, author);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(name, releaseDate, pageCount, author) {
    super(name, releaseDate, pageCount, author);
    this.type = "detective";
  }
}

const picknick = new FantasticBook(
  "Пикник на обочине",
  1972,
  168,
  "Аркадий и Борис Стругацкие",
);

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book){
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {

   const findedByParamBook = this.books.find(item => item[type] === value)
   return !!findedByParamBook ? findedByParamBook : null;
  }

giveBookByName(bookName){
  const index = this.books.findIndex(book => book.name === bookName);
  if (index !== -1){
    return this.books.splice(index, 1)[0];
  }
  return null;

}

}
const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008,
   "Артур Конан Дойл",
 )
);

library.addBook(
 new FantasticBook(
   "Пикник на обочине",
   1972,
   168,
   "Аркадий и Борис Стругацкие",
 )
);

library.addBook(new NovelBook("Машина времени", 1895, 138, "Герберт Уэллс",));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.giveBookByName("Машина времени");



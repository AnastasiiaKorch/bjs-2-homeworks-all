class PrintEditionItem {
  constuctor (name, releaseData, pagesCount) {
     this.name = name;
     this.releaseData = releaseData;
     this.pagesCount = pagesCount;

     this.type = null;
 }

     fix(){
        this.state *= 1.5;
    }

    set state(number){
        if (number >= 100) {
            number = 100;
        } else if (number <= 0) {
            number = 0;
        }
    this._state = number;
    }

    get state(){
      if(this._state === undefined){
          this._state = 100;
      }
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    };
};

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    };
};

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    };
};

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    };
};

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    };
};

//задача 2
class Library extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(releaseDate, pagesCount);
      this.name = name;
      this.books = [];
    }

    addBook(book) {
      if (this.state > 30) {
      this.books.push(book)
       }
    }

    findBookBy(type, value) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i][type] === value) {
          return this.books[i];
        }
      }
      return null;
    }

    giveBookByName(bookName) {
      for (let i = 0; i < this.books.length; i++){
        if (this.books[i].name === bookName){
          return this.books.splice(i, 1)[0];
        }
      }
      return null;
    }
}

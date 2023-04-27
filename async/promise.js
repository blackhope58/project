// const promise1 = new Promise((resolve, reject) => {
//     resolve("Veriler alındı");
//     reject("Bir hata oluştu");
// });

// console.log(promise1);

// promise1
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const books = [
  { name: "Kitap 1", author: "Haruki Murakami" },
  { name: "Kitap 2", author: "Franz Kafka" },
  { name: "Kitap 3", author: "George Orwell" },
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.name);
  });
};

const addBook = (newBook) => {
  const promise1 = new Promise((resolve, reject) => {
    books.push(newBook);
    resolve(books);
    // reject("Bir hatéa oluştu");
  });
  return promise1;
};

addBook({ name: "Kitap 4", author: "Lev Tolstoy" })
  .then(() => {
    console.log("Yeni Liste");
    listBooks();
  })
  .catch((error) => {
    console.log(error);
  });

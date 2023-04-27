// console.log('1. görev')
// console.log('2. görev')
// console.log('3. görev')

// const func1 = () => {
//   console.log("func 1 tamamlandı");
// };
// const func2 = () => {
//   console.log("func 2 tamamlandı");
// };

// func2();
// func1();

// const func1 = () => {
//   console.log("func 1 tamamlandı");
//   func2();
// };
// const func2 = () => {
//   console.log("func 2 tamamlandı");
//   func3();
// };
// const func3 = () => {
//   console.log("func 3 tamamlandı");
// };

// func1();

// const func1 = () => {
//   console.log("func 1 tamamlandı");
//   func2();
// };
// const func2 = () => {
//   console.log("func 2 tamamlandı");
//   func3();
// };
// const func3 = () => {
//   console.log("func 3 tamamlandı");
// };

// func1();

// let x = 5;
// console.log(x);

// setTimeout(() => {
//   x += 5;
//   console.log(x);
// }, 2000);

// x += 7;
// console.log(x);

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

const addBook = (newBook, callback) => {
  books.push(newBook);
  callback();
};

export default {
  addBook,
  listBooks,
};

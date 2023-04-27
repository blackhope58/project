console.log("exportTest Sayfasındasın...");

import addBookFunc from "./callback.js";

addBookFunc.addBook(
  { name: "Kitap 4asd", author: "Sabahattiasdasn Ali" },
  addBookFunc.listBooks
);

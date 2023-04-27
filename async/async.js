function getData(data) {
  return new Promise((resolve, reject) => {
    console.log("Veriler alınacak gibi");

    if (data) {
      resolve("Veriler alındı");
    } else {
      reject("Veriler alınamadı");
    }
  });
}

function cleanData(receivedData) {
  return new Promise((resolve, reject) => {
    console.log("Veriler silinecek haa");

    if (receivedData) {
      resolve("Veriler silindi");
    } else {
      reject("Veriler silinemedi");
    }
  });
}

// getData(true)
//   .then((result) => {
//     console.log(result);
//     return cleanData(false);
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async function precessData() {
//   try {
//     const receivedData = await getData(true);
//     console.log(receivedData);
//     const cleanedData = await cleanData(true);
//     console.log(cleanedData);
//   } catch (error) {
//     console.log(error);
//   }
// }

// precessData();

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

async function showBooks() {
  try {
    await addBook({ name: "Kitap 4", author: "Lev Tolstoy" });
    listBooks();
  } catch (error) {
    console.log(error);
  }
}

showBooks();

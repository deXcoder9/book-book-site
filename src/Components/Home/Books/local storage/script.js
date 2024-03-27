const getStoredBooks = () => {
  const storedBooks = localStorage.getItem("read-books");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

const saveBooks = (id) => {
  const storedBooks = getStoredBooks();
  const exist = storedBooks.find((bookid) => bookid == id);
  if (!exist) {
    storedBooks.push(id);
    localStorage.setItem("read-books", JSON.stringify(storedBooks));
  }
};

export { saveBooks, getStoredBooks };

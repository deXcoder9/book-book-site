const getStoredWishlistedBooks = () => {
  const storedBooks = localStorage.getItem("wishlisted-books");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

const saveWishlistedBooks = (id) => {
  const storedBooks = getStoredWishlistedBooks();
  const exist = storedBooks.find((bookid) => bookid == id);
  if (!exist) {
    storedBooks.push(id);
    localStorage.setItem("wishlisted-books", JSON.stringify(storedBooks));
  }
};

export { saveWishlistedBooks, getStoredWishlistedBooks };

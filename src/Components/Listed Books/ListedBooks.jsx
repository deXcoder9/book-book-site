import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../Home/Books/local storage/script";
import ReadBooks from "./ReadBooks";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WishlistBooks from "./WishlistBooks";
import { getStoredWishlistedBooks } from "../Home/Books/local storage/wishlistxScript";

const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([])
    const [wishlistedBooks, setWishlistedBooks] = useState([])
    const books = useLoaderData()
    // for read books
    useEffect(() => {
        const storedBooksIds = getStoredBooks()
        if (books.length > 0) {
            const listedBooks = books.filter(book => storedBooksIds.includes(book.bookId))
            setReadBooks(listedBooks)
        }
    }, [])

    // for wishlisted books
    useEffect(() => {
        const storedWIshBooksIds = getStoredWishlistedBooks()
        if (books.length > 0) {
            const wishlistedBooks = books.filter(book => storedWIshBooksIds.includes(book.bookId))
            setWishlistedBooks(wishlistedBooks)
        }
    }, [])

    console.log(readBooks)
    console.log(wishlistedBooks)
    return (
        <div className="my-10">

            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>WishList Books</Tab>
                    </TabList>

                    <TabPanel>
                        <div>
                            <h1 className="text-sm font-bold underline">Total Books added: {readBooks.length}</h1>
                            {
                                readBooks.map(book => <ReadBooks key={book.bookId} book={book}></ReadBooks>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h1 className="text-sm font-bold underline">Total Books added: {readBooks.length}</h1>
                        {
                            wishlistedBooks.map(book => <WishlistBooks key={book.bookId} book={book}></WishlistBooks>)
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBooks;
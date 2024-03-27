// import  from '../../assets/images/bannerImgae.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaRegStar } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import bannerImage from '../../../assets/images/bannerImgae.png';


const Boooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('booksdata.json')
            .then(response => response.json())
            .then(data => setBooks(data))
    }, [])
    const handleBookCard = () => {
        <NavLink to='/bookDetails' > </NavLink>
    }
    return (
        <div className='my-10'>
            <div>
                <h1 className="text-4xl font-bold text-center py-6">Books</h1>
            </div>
            <div className='books_container'>
                {
                    books.map(book =>
                        <Link key={book.bookId} to={`/bookDetails/${book.bookId}`}>
                            <div onClick={handleBookCard} className='w-[360px] h-[480px] p-6 books-card' >
                                <div className='w-[320px] h-[230px] books-bg'>
                                    <img className='h-[160px]' src={bannerImage} alt="" />
                                </div>
                                <div className='flex gap-x-6 text-purple-700 font-bold pt-5' >
                                    {
                                        book.tags.map((tag, idx) => <p key={idx}> {tag}</p>)
                                    }
                                </div>
                                <h3 className='font-bold text-xl py-3'>{book.bookName}</h3>
                                <p className='text-gray-600'>By. {book.author}</p>
                                <div className='flex justify-between text-[rgba(19, 19, 19, 0.8)] pt-9'>
                                    <p  >{book.category}</p>
                                    <div className='flex items-center gap-x-2'>
                                        <FaRegStar />
                                        <p>  {book.rating}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>

        </div>
    );
};

export default Boooks;
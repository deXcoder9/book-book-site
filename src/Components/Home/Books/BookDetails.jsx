import { useLoaderData, useParams } from "react-router-dom";
import BannerImg from "../../../assets/images/bannerImgae.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './custonToastStyles.css'
import { saveBooks } from "./local storage/script";
import { saveWishlistedBooks } from "./local storage/wishlistxScript";

const BookDetails = () => {
    const books = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    console.log(idInt)
    const book = books.find(book => book.bookId == idInt)
    const { yearOfPublishing, publisher, tags, rating, totalPages, review, author, bookName, category } = book;

    const readNotify = () => {
        saveBooks(idInt)
        toast.success("successfully added to the ReadList");
    }
    const wishNotify = () => {
        saveWishlistedBooks(idInt)
        toast.success("successfully added to the WishLisht");
    }
    return (
        <div className="my-10">
            {/* <h1 className='text-2xl my-60 text-red-600 font-bold'>Book details here: {id}</h1> */}
            <div className="flex justify-around">
                <div className="w-[550px] books-bg p-28">
                    <img src={BannerImg} alt="book" />
                </div>
                <div className="w-[550px]">
                    <h1 className="text-4xl font-bold pb-7">{bookName}</h1>
                    <p className="text-gray-500 pb-5">By: {author}</p>
                    <hr />
                    <p className="py-6 text-xl font-bold">{category}</p>
                    <hr />
                    <p className="py-10 text-gray-500"><span className="font-bold text-[19px] text-black ">Review:</span> {review}  </p>
                    <p className="pb-5"><span className="font-bold text-[19px]" > Tags:</span>
                        {
                            tags.map((tag, idx) => <span className="px-4 text-purple-800" key={idx}> #{tag} </span>)
                        }
                    </p>
                    <hr />
                    <div className="flex pt-7">
                        <div className="w-[230px] text-[rgba(19, 19, 19, 0.7)]">
                            <p>Number of Pages:</p>
                            <p className="py-2">Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p className="py-2">Rating:</p>
                        </div>
                        <div className="text-black font-bold text-[18px]">
                            <p>{totalPages}</p>
                            <p className="py-1">{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p className="py-2">{rating}</p>
                        </div>
                    </div>
                    <div className="mt-4 gap-x-7 flex text-4xl">
                        <button onClick={readNotify} className="btn  text-white bg-black hover:text-black px-8 text-xl">Read</button>
                        <button onClick={wishNotify} className="btn text-black  hover:text-white hover:bg-black text-xl px-8">Wishlist</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
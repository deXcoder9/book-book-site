
import bannerImage from '../../assets/images/bannerImgae.png';

const Banner = () => {

    return (
        <div className="bannerContainer">
            <div className='w-[440px]'>
                <h1 className='text-5xl font-bold py-7'>Books to Freshen up your Bookshelf</h1>
                <button className="btn text-white bg-black hover:text-black ">View The List</button>
            </div>
            <div>
                <img className='h-[430px]' src={bannerImage} alt="books" />
            </div>
        </div>
    );
};

export default Banner;
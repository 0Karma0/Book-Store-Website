import { useParams } from "react-router-dom";
import BooksReviewData from "../Hooks/BooksReviewData";
import { useEffect } from "react";
import { useState } from "react";
import { saveToLocalStorage } from "../utils/localStorage";

const ListedBooksDetails = () => {
    const [singleData, setSingleData] = useState({});
    const { id } = useParams();
    const { data} = BooksReviewData();

    const handleList = () => {
        saveToLocalStorage(singleData);
    }

    useEffect(() => {
        if(data){
            const singleData = data.find(item => item.id == id);
            setSingleData(singleData);
        }
    }, [data, id])
    const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = singleData || {};
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="w-96 mt-10" src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>By:-{author}</p>
                <p>Categories: {category}</p>
                <p>Review:{review}</p>
                <p>Tags:{tags}</p>
                <p>Number of Pages:{totalPages}</p>
                <p>Publisher:{publisher}</p>
                <p>Published Date:{yearOfPublishing}</p>
                <p>Rating :{rating}/5</p>
                <div className="card-actions justify-start">
                    <button onClick={handleList} className="btn btn-info">Read</button>
                    <button className="btn btn-outline">Wish List</button>
                </div>
            </div>
        </div>
    );
};

export default ListedBooksDetails;
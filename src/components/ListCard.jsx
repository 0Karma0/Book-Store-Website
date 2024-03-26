import { Link } from "react-router-dom";

const ListCard = ({data}) => {
    const {id,bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = data || {};
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="w-96 my-4" src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>By:- {author}</p>
                <p>Tags: {tags}</p>
                <p>Page Number: {totalPages}</p>
                <p>Published: {yearOfPublishing}</p>
                <p>Publisher: {publisher}</p>
                <p>Ratings:  {rating}/5</p>
                <p>Categories: {category}</p>
                <div className="card-actions justify-end">
                    <Link to={`/listedBooks-details/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ListCard;
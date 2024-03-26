import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ item }) => {
    const { id, bookName, author, image, rating, category,yearOfPublishing } = item || {};
    return (
        <Link to={`/listedBooks-details/${id}`}>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="w-80" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{category}</div>
                    </h2>
                    <h3 className="text-xl">By:-{author}</h3>
                    <div> Published:{yearOfPublishing}</div>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">{rating}/5</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
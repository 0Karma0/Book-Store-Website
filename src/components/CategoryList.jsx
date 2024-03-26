import BooksReviewData from "../Hooks/BooksReviewData";
import Card from "./Card";

const CategoryList = () => {
    const {data} = BooksReviewData()
    return (
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto my-10">
            {
                data.map(item => <Card key={data.id} item={item}></Card>)
            }
        </div>
    );
};

export default CategoryList;
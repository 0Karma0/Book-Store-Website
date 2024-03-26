import UseLocalStorage from "../Hooks/UseLocalStorage";
import ListCard from "../components/ListCard";

const ListedBooks = () => {
    const { LocalData } = UseLocalStorage();
    if(LocalData.length == 0){
        return (<div className="text-center mt-5">No books listed yet!</div>)
    }
    return (
        <div>
            {
                LocalData.map((data) => <ListCard key={data.id} data={data}></ListCard>)
            }
        </div>
    );
};

export default ListedBooks;